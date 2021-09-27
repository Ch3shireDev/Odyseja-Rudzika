import { Result } from "./result";
import { DecisionLabels, FeedingGroundLabels, getRainLabel, getWindLabel, HealthLabel } from "./labels";
import { RobinModel } from "./robin-model";
import { DecisionModel } from "./decision-model";
import { DecisionEnum, Health } from "./enums";

export function getPlayerDecision(robinModel: RobinModel): DecisionModel {

    const data = prompt("Wybierz:");
    if (data === null) {
        console.log("Nie zrozumiałem.");
        return getPlayerDecision(robinModel);
    }
    const value = parseInt(data) - 1;
    if (DecisionEnum[value] === undefined) {
        console.log("Nie zrozumiałem.");
        return getPlayerDecision(robinModel);
    }

    const decision = new DecisionModel();
    decision.decision = value as DecisionEnum;

    if (decision.decision == DecisionEnum.Fly) {
        decision.fatUsed = getFlyFatDecision();
    }

    return decision;
}

export function getFlyFatDecision(): number {
    const data = prompt("Określ ilość tłuszczu do zużycia na lot:");
    if (data === null) {
        console.log("Nie zrozumiałem.");
        return getFlyFatDecision();
    }
    const value = parseFloat(data);
    return value;
}

export function showStats(robinModel: RobinModel) {
    console.log(`Bieżąca data: ${robinModel.currentDate.toLocaleDateString("pl-PL")}`);
    console.log("");
    console.log(`Liczba przebytych kilometrów: ${toKm(robinModel.distance)} km`);
    console.log(`Liczba kilometrów do przebycia: ${toKm(robinModel.currentLocation.distanceTo(robinModel.finalLocation))} km`);
    console.log(`Stan: ${HealthLabel.get(robinModel.health)}`);
    console.log(`Doświadczenie:`);
    console.log(`* Krogulec: ${robinModel.sparrowHawkAttacksSurvived}`);
    console.log(`* Załamanie pogody: ${robinModel.weatherBreakdowns}`);
    console.log(`* Mgła: ${robinModel.lostInTheMist}`);
    console.log(
        `* Szklany wieżowiec: ${robinModel.glassSkyscraperCollisions}`,
    );
    console.log("");
    console.log(`Pogoda:`);
    console.log(`* Temperatura: ${robinModel.weather.temperature}`);
    console.log(`* Wiatr: ${getWindLabel(robinModel.weather.windDirection, robinModel.weather.windType)}`);
    console.log(`* Deszcz: ${getRainLabel(robinModel.weather.rainfall)}`);
    console.log("");
    // console.log(`Prognoza pogody:`);
    // console.log(`* Temperatura: ${this.weather.temperature}`);
    // console.log(`* Wiatr: ${this.windLabel}`);
    // console.log(`* Deszcz: ${this.weather.rainfall}`);
    // console.log("");
    console.log(`Tłuszcz: ${robinModel.fatTissue.toFixed(1)}`);
    console.log(`Tłuszcz po przeżyciu dnia: ${(robinModel.fatTissue - 1).toFixed(1)}`);
    console.log(`Żerowisko: ${FeedingGroundLabels.get(robinModel.feedingGround)}`);
    console.log("");
}

export function showDecision(result: Result) {
    if (result.decision === undefined) return;
    const decision = DecisionLabels.get(result.decision);
    console.log(`Twoja decyzja to: ${decision}`);
    console.log("");
}

export function showAvailableOptions(): void {
    console.log("Decyzja:");
    console.log("* 1 - Żeruj intensywnie");
    console.log("* 2 - Żeruj na utrzymanie kondycji");
    console.log("* 3 - Leć");
    console.log("* 4 - Zmień żerowisko");
    console.log("* 5 - Ulecz rany");
}

export function getFatUsed(robinModel: RobinModel): number {
    const valueStr = prompt("Ile tłuszczu zamierzasz zużyć?");
    if (valueStr === null) {
        console.log("Niepoprawna wartość!");
        return getFatUsed(robinModel);
    }
    const value = parseFloat(valueStr);
    if (isNaN(value)) {
        console.log("Niepoprawna wartość!");
        return getFatUsed(robinModel);
    }
    if (value > robinModel.fatTissue) {
        console.log(
            `Zbyt duża wartość! Maksymalna ilość tłuszczu to ${robinModel.fatTissue} g`,
        );
        return getFatUsed(robinModel);
    }
    return value;
}

export function showSparrowHawkResult(result: Result) {
    if (result.sparrowHawk === undefined) return;

    const sparrowHawk = result.sparrowHawk;

    console.log(`ATAK KROGULCA`);
    console.log(`PARAMETRY:`);
    console.log(
        `* Szansa wystąpienia: ${asPercent(sparrowHawk.sparrowHawkAttackProbability)}`,
    );
    console.log(
        `* Szansa powodzenia bez modyfikatorów: ${asPercent(sparrowHawk.sparrowHawkAttackSuccessBaseProbability)
        }`,
    );
    console.log(`* Modyfikator kształtu skrzydła: ${asPercent(sparrowHawk.wingMod)}`);
    console.log(
        `* Modyfikator doświadczenia: -${asPercent(sparrowHawk.experienceMod)}`,
    );
    console.log(`* Modyfikator z otłuszczenia: +${asPercent(sparrowHawk.fatMod)}`);
    console.log(
        `* Szansa powodzenia z modyfikatorami: ${asPercent(sparrowHawk.sparrowHawkAttackSuccessFinalProbability)
        }`,
    );
    console.log(`* Szansa odniesienia ran: ${asPercent(sparrowHawk.injuresChance)}`);
    console.log(`* Szansa śmierci: ${asPercent(sparrowHawk.deathChance)}`);
    console.log(`SKUTEK:`);
    if (sparrowHawk.attack == false) console.log(`Atak nie wystąpił.`);
    else if (sparrowHawk.health == Health.Healthy) {
        console.log(`Atak wystąpił, ale był nieskuteczny.`);
    } else if (sparrowHawk.health == Health.Injured) {
        console.log(`Atak wystąpił, rudzik został ranny.`);
    } else console.log(`Atak wystąpił. Rudzik został zabity.`);
}

export function showExpectedResult(result: Result) {
    if (result.success) {
        console.log(`Skutek przewidywany: ${result.expectedResult}`);
    }
    else {
        console.log(`Nie można wybrać decyzji. Powód: ${result.errorMessage}`);
    }
}

export function showResult(result: Result) {
    let flag = false;

    if (result.sparrowHawkAttack) {
        showSparrowHawkResult(result);
        flag = true;
    }
    if (result.mist) {
        showMistResult(result);
        flag = true;
    }
    if (result.weatherBreakdown) {
        showWeatherBreakdownResult(result);
        flag = true;
    }

    if (result.message) {
        console.log(result.message);
        flag = true;
    }

    if (flag) prompt("Naciśnij [ENTER] aby iść dalej.");
}

export function showMistResult(result: Result) {
    console.log(`Błądzisz we mgle! Lecisz ${toKm(result.distance)} km w niewłaściwą stronę.`);
}

function toKm(distance: number, fixed = 1): string {
    return (distance / 1000).toFixed(fixed);
}

export function asPercent(value: number | undefined): string {
    if (typeof (value) === "undefined") return "0%";
    return `${(value * 100).toFixed(1)}%`;
}

export function showWeatherBreakdownResult(result: Result) {
    console.log(`Załamanie pogody! Rudzik traci ${result.fatUsed} jednostek tłuszczu.`);
}