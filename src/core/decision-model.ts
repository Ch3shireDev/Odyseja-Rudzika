import { DecisionEnum } from "./enums";

export class DecisionModel {
    public decision: DecisionEnum = DecisionEnum.FitFeeding;
    public fatUsed?: number;

}