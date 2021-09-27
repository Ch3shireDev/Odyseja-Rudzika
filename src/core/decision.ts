import { Config } from "./config";
import { DecisionFitFeeding } from "./decision-fit-feeding";
import { DecisionFly } from "./decision-fly";
import { DecisionIntensiveFeeding } from "./decision-intensive-feeding";
import { DecisionModel } from "./decision-model";
import { DecisionRecover } from "./decision-recover";
import { DecisionSwitchFeeding } from "./decision-switch-feeding";
import { DecisionEnum } from "./enums";
import { Result } from "./result";
import { RobinModel } from "./robin-model";


export class Decision {
    public constructor(private config: Config, private robinModel: RobinModel, private decisionModel: DecisionModel) {
    }

    public getResult(): Result {
        let result: Result;
        if (this.decisionModel.decision === DecisionEnum.IntensiveFeeding) {
            result = new DecisionIntensiveFeeding(this.config, this.robinModel).getResult();
        }
        else if (this.decisionModel.decision === DecisionEnum.FitFeeding) {
            result = new DecisionFitFeeding(this.config, this.robinModel).getResult();
        }
        else if (this.decisionModel.decision === DecisionEnum.SwitchFeeding) {
            result = new DecisionSwitchFeeding(this.config, this.robinModel).getResult();
        }
        else if (this.decisionModel.decision === DecisionEnum.Fly) {
            result = new DecisionFly(this.config, this.robinModel, this.decisionModel).getResult();
        }
        else if (this.decisionModel.decision === DecisionEnum.Recover) {
            result = new DecisionRecover(this.config, this.robinModel).getResult();
        }
        else {
            return Result.Error(this.robinModel, "Błąd - brak zrozumiałej decyzji.");
        }

        result.fatBefore = this.robinModel.fatTissue;
        result.fatAfter = this.robinModel.fatTissue + result.fatGained - result.fatUsed - this.config.dailyFatCost;
        if (result.fatAfter <= -1) {
            result.starvation = true;
        }

        return result;
    }
}