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
        const fatTotal = this.result.fatAfter-this.result.fatBefore;
        if (fatTotal > 0) {
            this.message.push(`Zyskujesz ${fatTotal.toFixed(1)} punktów tłuszczu.`);
        }
        else if(fatTotal == 0){
            this.message.push(`Twoja ilość tłuszczu się nie zmienia.`);
        }
        else{
            this.message.push(`Tracisz ${(-fatTotal).toFixed(1)} punktów tłuszczu.`);
        }
    }
}
