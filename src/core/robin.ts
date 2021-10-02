import { Result } from "./result";
import { RobinModel } from "./robin-model";
import { Health } from "./enums";
import { DecisionModel } from "./decision-model";
import { Decision } from "./decision";
import { Config } from "./config";

export class Robin {
    public constructor(private config: Config, public robinModel: RobinModel) { }
    public get isDead(): boolean {
        return this.robinModel.health === Health.Dead;
    }

    public sendDecision(decisionModel: DecisionModel): Result {

        const decision = new Decision(this.config, this.robinModel, decisionModel);
        return decision.getResult();

    }

    setResult(result: Result) {
        if (!result.success || this.robinModel.health === Health.Dead) {
            return;
        }

        this.robinModel.distance += result.distance;
        this.robinModel.health = result.health ?? Health.Healthy;
        this.robinModel.fatTissue += result.fatGained - result.fatUsed;
        this.robinModel.feedingGround = result.feedingGround;
        this.robinModel.currentLocation = result.location;
        this.robinModel.weather = result.weather;

        if (result.newDay) {
            this.robinModel.currentDate.setDate(
                this.robinModel.currentDate.getDate() + 1,
            );

            this.robinModel.turn += 1;

            // Rudzik spala 1 jednostkę tłuszczu na dzień.
            this.robinModel.fatTissue -= this.config.dailyFatCost;

            if (this.robinModel.fatTissue >= this.config.overweightLevel) {
                this.robinModel.overweightDay += 1;
            } else {
                this.robinModel.overweightDay = 0;
            }
        }

        if (result.sparrowHawkAttack) {
            this.robinModel.health = result.health;
            this.robinModel.sparrowHawkAttacksSurvived += 1;
        }

        if (result.mist) {
            this.robinModel.lostInTheMist += 1;
        }

        if (result.weatherBreakdown) {
            this.robinModel.weatherBreakdowns += 1;
        }

        if (result.skyscraperCollision) {
            this.robinModel.glassSkyscraperCollisions += 1;
        }

        if (this.robinModel.fatTissue > this.config.maxFatTissue) this.robinModel.fatTissue = this.config.maxFatTissue;

        if (result.health != null) {
            this.robinModel.health = result.health;
        }

        if (this.robinModel.fatTissue <= this.config.minFatTissue) {
            result.health = Health.Dead;
        }
    }
}
