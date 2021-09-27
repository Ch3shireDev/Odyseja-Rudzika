import { Result } from "./result";
import { HealthLabel } from './labels';
import { DecisionEnum } from "./enums";
export class ResultLabel {
    public success: boolean;
    public message: string[] = [];
    public errorMessage: string;
    public expectedMessage: string;

    constructor(public result: Result) {
        this.success = result.success;
        this.expectedMessage = result.expectedResult;
        this.errorMessage = result.errorMessage;
        const decision = this.result.decision;
        if (decision === DecisionEnum.IntensiveFeeding || decision === DecisionEnum.FitFeeding) this.getFeedingMessage();
        else this.message.push(this.result.message);

        if(this.result.starvation){
            this.message.push(`Rudzik ginie z głodu.`);
        }
        
        else if (this.result.sparrowHawkAttack) {
            this.message.push(this.result.sparrowHawk.message);
            this.message.push(`Twój stan zdrowia to: ${HealthLabel.get(this.result.health)}`);
        }
    }

    getFeedingMessage() {
        if (this.result.fatGained > 0) {
            this.message.push(`Zyskujesz ${this.result.fatGained.toFixed(1)} punktów tłuszczu.`);
        }
        if (this.result.fatUsed > 0) {
            this.message.push(`Tracisz ${this.result.fatUsed.toFixed(1)} punktów tłuszczu.`);
        }
    }
}
