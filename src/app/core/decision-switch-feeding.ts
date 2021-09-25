import { Config } from "./config";
import { DecisionEnum, FeedingGround, Health } from "./enums";
import { FeedingGroundLabels } from "./labels";
import { Result } from "./result";
import { RobinModel } from "./robin-model";
import { getFeedingGround } from "./tools";

export class DecisionSwitchFeeding {
    constructor(private config:Config, private robinModel: RobinModel) { }

    getResult(): Result {
        if (this.robinModel.health !== Health.Healthy) {
            return Result.Error(this.robinModel, "Rudzik musi być zdrowy, by mógł zmienić żerowisko!");
        }

        if (this.robinModel.feedingGround === FeedingGround.Good) {
            return Result.Error(this.robinModel, "Żerowisko jest już najlepsze możliwe!");
        }

        const result = new Result(this.robinModel);
        result.success = true;
        result.newDay = false;
        result.fatUsed = 1;
        result.expectedResult = "Zmiana żerowiska.";
        const newFeedingGround = getFeedingGround();
        if (newFeedingGround > result.feedingGround) {
            result.feedingGround = newFeedingGround;
            result.additionalMessage = `Rudzik znalazł lepsze żerowisko. Nowe żerowisko to: ${FeedingGroundLabels.get(newFeedingGround)}`;
        }
        else {
            result.additionalMessage = `Rudzikowi nie udało się znaleźć lepszego żerowiska.`;
        }
        result.decision = DecisionEnum.SwitchFeeding;
        return result;
    }


}