import { DecisionFly } from "./decision-fly";
import { DecisionModel } from "./decision-model";
import { DecisionEnum } from "./enums";
import { FeedingGroundLabels, getRainLabel, getWindLabel, HealthLabel, SexLabels, WingTypeLabels } from "./labels";
import { RobinModel } from "./robin-model";
import { Config } from "../core/config";
import { DecisionIntensiveFeeding } from "./decision-intensive-feeding";
import { DecisionFitFeeding } from "./decision-fit-feeding";
import { DecisionSwitchFeeding } from "./decision-switch-feeding";
import { DecisionRecover } from "./decision-recover";
import { LabelResult } from "./label-result";
import { Decision } from "./decision";

function toKm(distance: number, fixed = 1): string {
    return (distance / 1000).toFixed(fixed) + " km";
}

export class RobinLabels {

    constructor(public robinModel: RobinModel) { }
    public get sex(): string { return SexLabels.get(this.robinModel.sex); }
    public get wing(): string { return WingTypeLabels.get(this.robinModel.wingType); }
    // public get (): string { return SexLabels.get(this.robinModel.sex); }
    public get name(): string { return this.robinModel.name; }
    public get date(): string { return this.robinModel.currentDate.toLocaleDateString("pl-PL"); }
    public get distanceMade(): string { return toKm(this.robinModel.distance); }
    public get distanceTo(): string { return toKm(this.robinModel.currentLocation.distanceTo(this.robinModel.finalLocation)); }
    public get health(): string { return HealthLabel.get(this.robinModel.health); }
    public get sparrowHawks(): number { return this.robinModel.sparrowHawkAttacksSurvived; }
    public get weatherBreakdowns(): number { return this.robinModel.weatherBreakdowns; }
    public get mists(): number { return this.robinModel.lostInTheMist; }
    public get skyscrapers(): number { return this.robinModel.glassSkyscraperCollisions; }
    public get temperature(): string { return `${this.robinModel.weather.temperature} °C`; }
    public get wind(): string { return getWindLabel(this.robinModel.weather.windDirection, this.robinModel.weather.windType); }
    public get rain(): string { return getRainLabel(this.robinModel.weather.rainfall); }
    public get fat(): string { return this.robinModel.fatTissue.toFixed(1); }
    public get endDayFat(): string { return (this.robinModel.fatTissue - 1).toFixed(1); }
    public get feedingGround(): string { return FeedingGroundLabels.get(this.robinModel.feedingGround); }
    public get location(): string {
        const lat = this.robinModel.currentLocation.latitude;
        const latA = Math.abs(this.robinModel.currentLocation.latitude);
        const latD = Math.floor(latA);
        const latM = Math.floor((latA - latD) * 60);
        const latS = lat < 0 ? 'S' : 'N';
        const long = this.robinModel.currentLocation.longitude;
        const lonA = Math.abs(long);
        const lonD = Math.floor(lonA);
        const lonM = Math.floor((lonA - lonD) * 60);
        const lonS = long < 0 ? 'W' : 'E';
        return `${latD}°${latM}' ${latS}, ${lonD}°${lonM}' ${lonS}`;
    }
    getFlightDistance(flyFat: number): string {
        const config = new Config();
        const decisionModel = new DecisionModel();
        decisionModel.decision = DecisionEnum.Fly;
        decisionModel.fatUsed = flyFat;
        let decision = new DecisionFly(config, this.robinModel, decisionModel);
        return `${(decision.getResult().expectedDistance / 1000).toFixed(1)} km`;
    }


    getResultLabel(decision: DecisionModel) {
        let config = new Config();
        let result = new Decision(config,this.robinModel, decision).getResult();
        return new LabelResult(result);
    }
}
