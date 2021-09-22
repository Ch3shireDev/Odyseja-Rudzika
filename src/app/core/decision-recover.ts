import { Config } from "./config";
import { DecisionModel } from "./decision-model";
import { DecisionEnum, Health } from "./enums";
import { Result } from "./result";
import { RobinModel } from "./robin-model";
import { getWeather } from "./tools";

export class DecisionRecover {
    constructor(private config: Config, private robinModel: RobinModel, private decisionModel: DecisionModel) { }

    getResult(): Result {
        if (this.robinModel.health !== Health.Injured) {
            return Result.Error(this.robinModel, "Rudzik musi być ranny, by mógł leczyć rany!");
        }
        const result = new Result(this.robinModel);
        result.health = Health.Healthy;
        result.expectedResult = "Rudzik spędzi dzień na odzyskanie sił.";
        result.decision = DecisionEnum.Recover;
        result.newDay = true;
        result.weather = getWeather();
        return result;

    }
}