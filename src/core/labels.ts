import { DecisionEnum, FeedingGround, Health, Rainfall, Sex, WindDirection, WindType, WingType } from "./enums";

export const SexLabels = new Map<Sex, string>([[Sex.Male, "Samiec"], [Sex.Female, "Samica"]]);

export const WingTypeLabels = new Map<WingType, string>([
    [WingType.StronglyPointed, "bardzo ostre"],
    [WingType.SlightyPointed, "lekko zaostrzone"],
    [WingType.Neutral, "neutralne"],
    [WingType.SlightyRounded, "lekko zaokrąglone"],
    [WingType.StronglyRounded, "okrągłe"],
]);

export const FeedingGroundLabels = new Map<FeedingGround, string>([
    [FeedingGround.VeryWeak, "bardzo słabe"],
    [FeedingGround.Weak, "słabe"],
    [FeedingGround.Medium, "średnie"],
    [FeedingGround.Good, "bardzo dobre"]
]);

export const HealthLabel = new Map<Health, string>([
    [Health.Healthy, "Zdrowy"],
    [Health.Injured, "Ranny"],
    [Health.Dead, "Martwy"]
]);

export const RainLabels = new Map<Rainfall, string>([
    [Rainfall.None, "Brak opadów"],
    [Rainfall.Sprinkle, "Mżawka"],
    [Rainfall.LightRain, "Lekkie opady"],
    [Rainfall.ModerateRain, "Umiarkowane opady"],
    [Rainfall.HeavyRain, "Silne opady"],
    [Rainfall.ViolentRain, "Gwałtowne opady"]
]);

export const DecisionLabels = new Map<number, string>([
    [DecisionEnum.IntensiveFeeding, "Żeruj intensywnie"],
    [DecisionEnum.FitFeeding, "Żeruj na utrzymanie kondycji"],
    [DecisionEnum.Fly, "Leć"],
    [DecisionEnum.SwitchFeeding, "Zmień żerowisko"],
    [DecisionEnum.Recover, "Ulecz rany"]
]);

export const WindDirectionLabels = new Map<WindDirection, string>([
    [WindDirection.SideWind, "w bok"],
    [WindDirection.BeakWind, "w dziób"],
    [WindDirection.TailWind, "w kuper"]
]);

export const WindTypeLabels = new Map<WindType, string>([
    [WindType.None, "Brak wiatru"],
    [WindType.WeakWind, "Słaby wiatr"],
    [WindType.MediumWind, "Umiarkowany wiatr"],
    [WindType.StrongWind, "Mocny wiatr"],
    [WindType.VeryStrongWind, "Bardzo mocny wiatr"],
    [WindType.Hurricane, "Huragan"]
]);

export function getRainLabel(rainfall: Rainfall) {
    return RainLabels.get(rainfall);
}
export function getWindLabel(direction: WindDirection, type: WindType): string {
    if (type == WindType.None) {
        return WindTypeLabels.get(type) ?? "brak";
    } else if (type == WindType.Hurricane) {
        return `${WindTypeLabels.get(type)}`;
    } else {
        return `${WindTypeLabels.get(type)}, ${WindDirectionLabels.get(direction)}`;
    }
}