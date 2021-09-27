import { Config, RainModDistance, RainModFeeding, WindModDistanceMatrix, WindModFeeding } from "./config";
import { WeatherModel } from "./weather-model";

export class Weather {

    constructor(private config: Config, private weatherModel: WeatherModel) {
        this.weatherModel = weatherModel;
    }

    getWeatherPenalties() {
        // Zbyt niska temperatura skutkuje dodatkowym spadkiem tkanki tłuszczowej.
        return this.getTemperatureFeedingPenalty(this.weatherModel.temperature);
    }
    getFeedingMods(): number {
        let mods = 1;

        // Deszcz wpływa na jakość żerowania.
        mods *= RainModFeeding.get(this.weatherModel.rainfall) ?? 1;

        // Wiatr de facto nie modyfikuje jakości żerowania, ale dodaję mapę na wszelki wypadek.
        mods *= WindModFeeding.get(this.weatherModel.windType) ?? 1;

        // Temperatura wpływa na jakość żerowania.
        mods *= this.getTemperatureFeedingMod(this.weatherModel.temperature);

        return mods ?? 1;
    }
    getDistanceMods(): number {
        // Opady.
        let mods = RainModDistance.get(this.weatherModel.rainfall) ?? 1;
        // Wiatr.
        mods *= WindModDistanceMatrix[this.weatherModel.windType][this.weatherModel.windDirection];
        // Temperatura.
        mods *= this.getTemperatureDistanceMod(this.weatherModel.temperature);

        return mods ?? 1;
    }

    public getTemperatureDistanceMod(temperature: number) {
        if (temperature < this.config.maxFlightTemperatureOptimal) return 1;
        if (temperature < this.config.maxFlightTemperatureSubOptimal) return this.config.maxFlightTemperatureSubOptimalModificator;
        return 0;
    }

    public getTemperatureFeedingPenalty(temperature: number) {
        if (temperature > 25 || temperature < 0) return 1;
        return 0;
    }

    public getTemperatureFeedingMod(temperature: number) {
        if (temperature < this.config.minTemperatureOptimalFeeding) return this.config.minTemperatureOptimalFeedingModificator;
        return 1;
    }
}
