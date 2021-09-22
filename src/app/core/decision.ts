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
        if (this.decisionModel.decision === DecisionEnum.IntensiveFeeding) {
            const decision = new DecisionIntensiveFeeding(this.config, this.robinModel);
            return decision.getResult();
        }
        else if (this.decisionModel.decision === DecisionEnum.FitFeeding) {
            const decision = new DecisionFitFeeding(this.config, this.robinModel);
            return decision.getResult();
        }
        else if (this.decisionModel.decision === DecisionEnum.SwitchFeeding) {
            const decision = new DecisionSwitchFeeding(this.config, this.robinModel);
            return decision.getResult();
        }
        else if (this.decisionModel.decision === DecisionEnum.Fly) {
            const decision = new DecisionFly(this.config, this.robinModel, this.decisionModel);
            return decision.getResult();
        }
        else if (this.decisionModel.decision === DecisionEnum.Recover) {
            const decision = new DecisionRecover(this.config, this.robinModel, this.decisionModel);
            return decision.getResult();
        }

        return Result.Error(this.robinModel, "Błąd - brak zrozumiałej decyzji.");
    }
}