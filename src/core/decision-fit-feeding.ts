import { Config, FatFromFeedingGround } from "./config";
import { DecisionEnum, Health } from "./enums";
import { Result } from "./result";
import { RobinModel } from "./robin-model";
import { SparrowHawk } from "./sparrow-hawk";
import { getWeather } from "./tools";
import { Weather } from "./weather";

export class DecisionFitFeeding {
    constructor(private config: Config, private robinModel: RobinModel) { }

    getResult() {
        if (this.robinModel.health !== Health.Healthy) {
            return Result.Error(this.robinModel, "Rudzik musi być zdrowy by mógł żerować!");
        }

        const result = new Result(this.robinModel);
        result.success = true;
        result.newDay = true;
        result.decision = DecisionEnum.FitFeeding;
        result.expectedResult = `Rudzik będzie żerował na utrzymanie kondycji przez cały dzień, bez zyskiwania dodatkowego tłuszczu.`;

        // Naliczane są kary za bardzo słabe żerowisko oraz za wyjątkowo niską temperaturę,
        // poza tym nie zmieniamy otłuszczenia.
        const weather = new Weather(this.config, this.robinModel.weather);
        result.fatUsed = weather.getWeatherPenalties() / 2;
        result.fatGained = (FatFromFeedingGround.get(this.robinModel.feedingGround) ?? 0) / 2;
        if (result.fatGained - result.fatUsed > this.config.dailyFatCost) {
            // Rudzik nie może uzyskać więcej tłuszczu niż zużyje danego dnia.
            result.fatGained = this.config.dailyFatCost + result.fatUsed;
        }
        result.weather = getWeather();
        result.sparrowHawk = new SparrowHawk(this.config, this.robinModel, result.decision).getSparrowHawkAttackResult();
        result.sparrowHawkAttack = result.sparrowHawk.attack;
        result.feedingGround = this.robinModel.feedingGround;
        result.health = result.sparrowHawk.health;
        return result;
    }
}
