import { Rainfall, WindType, WindDirection, DecisionEnum, Health } from "./enums";
import { getRainLabel, WindDirectionLabels, WindTypeLabels } from "./labels";
import { Mist } from "./mist";
import { Result } from "./result";
import { RobinModel } from "./robin-model";
import { Skyscraper } from "./skyscraper";
import { SparrowHawk } from "./sparrow-hawk";
import { Weather } from "./weather";
import { WeatherBreakdown } from "./weather-breakdown";
import { DecisionModel } from "./decision-model";
import { getFeedingGround, getWeather, toKm } from "./tools";
import { Config } from "./config";

export class DecisionFly {
    constructor(private config: Config, private robinModel: RobinModel, private decisionModel: DecisionModel) { }

    public getResult() {
        if (this.robinModel.health !== Health.Healthy) {
            return Result.Error(this.robinModel, "Rudzik musi być zdrowy by mógł dalej podróżować.");
        }

        if (this.decisionModel.fatUsed === undefined) {
            return Result.Error(this.robinModel, "Niepoprawna wartość tłuszczu.");
        }

        if (this.decisionModel.fatUsed > this.robinModel.fatTissue) {
            return Result.Error(this.robinModel, "Niepoprawna wartość tłuszczu - przekracza bieżący tłuszcz rudzika.");
        }

        if (this.robinModel.fatTissue < this.config.minFlightFatTissue) {
            return Result.Error(this.robinModel, "Brak możliwości lotu: zbyt niskie otłuszczenie.");
        }

        if (
            this.robinModel.weather.rainfall === Rainfall.HeavyRain ||
            this.robinModel.weather.rainfall === Rainfall.ViolentRain
        ) {
            const rainLabel = getRainLabel(this.robinModel.weather.rainfall);
            return Result.Error(this.robinModel, `Brak możliwości lotu: ${rainLabel}`);
        }

        if (this.robinModel.weather.temperature > this.config.maxFlightTemperature) {
            return Result.Error(this.robinModel, `Brak możliwości lotu: zbyt wysoka temperatura.`);
        }

        if (this.robinModel.weather.windType === WindType.Hurricane) {
            const windLabel = WindTypeLabels.get(this.robinModel.weather.windType);
            return Result.Error(this.robinModel, `Brak możliwości lotu: ${windLabel}`);
        }

        if (
            this.robinModel.weather.windType === WindType.VeryStrongWind &&
            this.robinModel.weather.windDirection === WindDirection.BeakWind
        ) {
            const windLabel = WindTypeLabels.get(this.robinModel.weather.windType);
            const weatherLabel = WindDirectionLabels.get(this.robinModel.weather.windDirection);
            return Result.Error(this.robinModel, `Brak możliwości lotu: ${windLabel}, ${weatherLabel}`);
        }

        const fatUsed = this.decisionModel.fatUsed;
        const weather = new Weather(this.config, this.robinModel.weather);
        const effectiveness = this.config.flyFatEffectiveness * weather.getDistanceMods();
        const totalDistance = this.robinModel.currentLocation.distanceTo(this.robinModel.finalLocation);
        const bearing = this.robinModel.currentLocation.getBearing(this.robinModel.finalLocation);

        let expectedDistance = (fatUsed - this.config.flyFatCost) * effectiveness;
        if (expectedDistance > totalDistance) expectedDistance = totalDistance;

        const expectedLocation = this.robinModel.currentLocation.add(expectedDistance, bearing);

        const result = new Result(this.robinModel);
        result.decision = DecisionEnum.Fly;
        result.expectedResult = `Przelot ${(expectedDistance / 1000).toFixed(1)} kilometrów.`;
        result.distance = expectedDistance;
        result.location = expectedLocation;
        result.expectedDistance = expectedDistance;
        result.expectedLocation = expectedLocation;
        result.fatUsed = fatUsed;
        result.newDay = true;
        result.feedingGround = getFeedingGround();
        result.weather = getWeather();

        // Zderzenie z drapaczem chmur.

        const skyscraper = new Skyscraper(this.config, this.robinModel, expectedDistance);
        const skyscraperResult = skyscraper.calculateResult();

        if (skyscraperResult.collision) {
            result.distance = skyscraperResult.distance;
            result.health = skyscraperResult.health;
            result.location = this.robinModel.currentLocation.add(result.distance, bearing);
            result.skyscraperCollision = true;
            result.fatUsed = (this.config.flyFatCost + result.distance / effectiveness);
            return result;
        }

        // Załamanie pogody.

        const weatherBreakdown = new WeatherBreakdown(this.config, this.robinModel, expectedDistance);
        const weatherBreakdownResult = weatherBreakdown.getResult();

        if (weatherBreakdownResult.breakdown) {
            result.distance = weatherBreakdownResult.distance;
            result.health = Health.Healthy;
            result.location = this.robinModel.currentLocation.add(result.distance, bearing);
            result.weatherBreakdown = true;
            result.fatUsed = weatherBreakdownResult.fatUsed;
            result.message = `Załamanie pogody! Rudzik traci ${result.fatUsed} jednostek tłuszczu.`;
            return result;
        }

        // Zagubienie we mgle.

        const mist = new Mist(this.robinModel, expectedDistance);
        const mistResult = mist.getResult();

        if (mistResult.mist) {
            const distanceInMist = mistResult.distance;
            result.location = this.robinModel.currentLocation.add(distanceInMist, bearing + 90);
            result.mist = true;
            result.fatUsed = (this.config.flyFatCost + distanceInMist * this.config.flyFatEffectiveness);
            result.distance = distanceInMist;
            result.message = `Błądzisz we mgle! Lecisz ${toKm(result.distance)} km w niewłaściwą stronę.`
            return result;
        }

        // Atak krogulca.

        const sparrowHawk = new SparrowHawk(this.config, this.robinModel, DecisionEnum.Fly);
        const sparrowHawkResult = sparrowHawk.getSparrowHawkAttackResult();

        if (sparrowHawkResult.attack) {
            result.sparrowHawk = sparrowHawkResult;
            result.health = sparrowHawkResult.health;
            result.location = this.robinModel.currentLocation.add(result.distance, bearing);
            result.sparrowHawkAttack = true;
            // result.message = result.sparrowHawk.message;
            // return result;
        }

        result.message = `Przelatujesz ${(result.distance/1000).toFixed(1)} kilometrów.`;
        return result;
    }
}