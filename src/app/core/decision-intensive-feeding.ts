import { Config, FatFromFeedingGround } from "./config";
import { DecisionEnum, Health } from "./enums";
import { Result } from "./result";
import { RobinModel } from "./robin-model";
import { SparrowHawk } from "./sparrow-hawk";
import { getWeather } from "./tools";
import { Weather } from "./weather";

export class DecisionIntensiveFeeding {
    constructor(private config: Config, private robinModel: RobinModel) {

    }

    public getResult(): Result {
        if (this.robinModel.health !== Health.Healthy) {
            return Result.Error(this.robinModel, "Rudzik musi być zdrowy, by mógł żerować.");
        }

        const result = new Result(this.robinModel);

        result.success = true;
        result.decision = DecisionEnum.IntensiveFeeding;

        let fat = FatFromFeedingGround.get(this.robinModel.feedingGround) ?? 0;

        // W przypadku ujemnej tkanki tłuszczowej jakikolwiek zyskany tłuszcz jest dzielony na dwa.
        if (this.robinModel.fatTissue < 0) fat *= this.config.negativeFatModificator;

        const weather = new Weather(this.config, this.robinModel.weather);

        if (fat > 0) {
            fat *= weather.getFeedingMods() ?? 1;
        }

        result.fatGained = fat;
        result.fatUsed = weather.getWeatherPenalties();
        result.newDay = true;

        const fatTotal = result.fatGained - result.fatUsed - this.config.dailyFatCost;

        if (fatTotal > 0) {
            result.expectedResult = `Zwiększenie otłuszczenia do następnej rundy o +${fatTotal.toFixed(1)}`;
        }
        else if (fatTotal === 0) {
            result.expectedResult = `Brak zmiany otłuszczenia.`;
        }
        else {
            result.expectedResult = `Spadek otłuszczenia o ${(-fatTotal.toFixed(1))}`;
        }

        const sparrowHawk = new SparrowHawk(this.config, this.robinModel, result.decision).getSparrowHawkAttackResult();
        result.sparrowHawkAttack = sparrowHawk.attack;
        result.sparrowHawk = sparrowHawk;
        result.health = sparrowHawk.health;
        result.weather = getWeather();
        result.feedingGround = this.robinModel.feedingGround;

        return result;
    }
}