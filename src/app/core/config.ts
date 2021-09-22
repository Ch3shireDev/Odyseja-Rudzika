import { FeedingGround, Rainfall, WindType, WingType } from "./enums";
export class Config {
    // Szansa ataku krogulca.
    sparrowHawkAttackProbability = 0.5;
    // Szansa ataku przez krogulca podczas żerowania na utrzymanie kondycji.
    sparrowHawkAttackProbabilityWhenFitFeeding = 0.25;
    // Dzienny koszt przeżycia w tkance tłuszczowej.
    dailyFatCost = 1;
    // Poziom tkanki tłuszczowej po którym rudzik zaczyna być otyły.
    overweightLevel = 10;
    // Maksymalny poziom tkanki tłuszczowej.
    maxFatTissue = 15;
    // Minimalny poziom tkanki tłuszczowej - poniżej rudzik ginie.
    minFatTissue = -1;
    // W przypadku gdy rudzik żywi się będąc na ujemnym poziomie tkanki tłuszczowej, ilość pokarmu jest mnożona razy 0.5.
    negativeFatModificator = 0.5;
    // Bazowa wydajność lotu w przeliczeniu na metry na jednostkę tkanki tłuszczowej.
    flyFatEffectiveness = 25000;
    // Bazowy koszt startu lotu.
    flyFatCost = 1;
    // Temperatura powyżej której niemożliwy jest lot.
    maxFlightTemperature = 25;
    // Poziom tkanki tłuszczowej poniżej której niemożliwy jest start do lotu.
    minFlightFatTissue = 2;
    // Szansa zderzenia ze szklanym drapaczem chmur.
    skyscraperCollisionProbability = 0.0002;
    // Szansa śmierci w przypadku zderzenia z drapaczem chmur.
    skyscraperCollisionDeathChance = 0.33;
    // Ile punktów procentowych do przeżycia zyskuje rudzik za każdy przeżyty atak krogulca.
    sparrowHawkAttackExperienceModificator = 0.01;
    // Modyfikator tkanki tłuszczowej przy ataku krogulca w momencie gdy rudzik jest traktowany jako otyły.
    sparrowHawkAttackFatTissueModificator = 0.01;
    // Bazowa szansa śmierci w przypadku powodzenia ataku przez krogulca.
    sparrowHawkAttackDeathProbability = 0.33;
    // Maksymalna temperatura w której rudzik leci ze 100% wydajnością.
    maxFlightTemperatureOptimal = 15;
    // Powyżej tej temperatury rudzik leci ze zmniejszoną wydajnością.
    maxFlightTemperatureSubOptimal = 26;
    maxFlightTemperatureSubOptimalModificator = 0.75;
    // Minimalna temperatura przy której rudzik się normalnie żywi.
    minTemperatureOptimalFeeding = 0;
    // Poniżej minimalnej temperatury rudzik żywi się ze zmniejszoną wydajnością.
    minTemperatureOptimalFeedingModificator = 0.75;
    // Prawdopodobieństwo załamania pogody.
    weatherBreakdownProbability = 0.005;
    // Koszt w tkance tłuszczowej załamania pogody.
    weatherBreakdownFatCost = 3;
}

export const FatFromFeedingGround = new Map<FeedingGround, number>([
    [FeedingGround.VeryWeak, 0],
    [FeedingGround.Weak, 2],
    [FeedingGround.Medium, 4],
    [FeedingGround.Good, 6]
]);

export const RainModDistance = new Map<Rainfall, number>([
    [Rainfall.None, 1],
    [Rainfall.Sprinkle, 0.95],
    [Rainfall.LightRain, 0.8],
    [Rainfall.ModerateRain, 0.5],
    [Rainfall.HeavyRain, 0],
    [Rainfall.ViolentRain, 0]
]);

export const RainModFeeding = new Map<Rainfall, number>([
    [Rainfall.None, 1],
    [Rainfall.Sprinkle, 0.95],
    [Rainfall.LightRain, 0.8],
    [Rainfall.ModerateRain, 0.5],
    [Rainfall.HeavyRain, 0],
    [Rainfall.ViolentRain, 0]
]);

export const SparrowAttackWingMod = new Map<WingType, number>([
    [WingType.StronglyPointed, 1.15],
    [WingType.SlightyPointed, 1.05],
    [WingType.Neutral, 1],
    [WingType.SlightyRounded, 0.95],
    [WingType.StronglyRounded, 0.85]
]);

// kolumny: w dziób, w bok, w ogon
// wiersze: brak wiatru, słaby wiatr, średni wiatr, silny wiatr, b. silny wiatr, huragan
export const WindModDistanceMatrix = [
    [1, 1, 1],
    [0.95, 1, 1.05],
    [0.75, 0.9, 1.25],
    [0.5, 0.75, 1.5],
    [0, 0.5, 1.1],
    [0, 0, 0]
];

export const WindModFeeding = new Map<WindType, number>([
    [WindType.None, 1],
    [WindType.WeakWind, 1],
    [WindType.MediumWind, 1],
    [WindType.StrongWind, 1],
    [WindType.VeryStrongWind, 1],
    [WindType.Hurricane, 1]
]);
