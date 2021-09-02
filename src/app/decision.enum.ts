export enum DecisionEnum {
    IntensiveFeeding,
    FitFeeding,
    Fly,
    SwitchFeeding
}

export const DecisionLabels = new Map<number, string>([
    [DecisionEnum.IntensiveFeeding, 'Żeruj intensywnie'],
    [DecisionEnum.FitFeeding, 'Żeruj na utrzymanie kondycji'],
    [DecisionEnum.Fly, 'Leć dalej'],
    [DecisionEnum.SwitchFeeding, 'Zmień żerowisko'],
]);