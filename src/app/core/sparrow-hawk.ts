import { Config, SparrowAttackWingMod } from "./config";
import { DecisionEnum, Health } from "./enums";
import { RobinModel } from "./robin-model";
import { SparrowHawkResult } from "./sparrow-hawk-result";

export class SparrowHawk {
    public get sparrowHawkExperienceMod(): number {
        return this.robinModel.sparrowHawkAttacksSurvived * this.config.sparrowHawkAttackExperienceModificator;
    }
    public get sparrowHawkFatTissueMod(): number {
        return this.robinModel.fatTissue > 0 ? this.robinModel.fatTissue : 0 * this.config.sparrowHawkAttackFatTissueModificator;
    }

    public constructor(private config: Config, private robinModel: RobinModel, private decision: DecisionEnum = DecisionEnum.IntensiveFeeding) {
        this.robinModel = robinModel;
    }

    public getSparrowHawkAttackResult(): SparrowHawkResult {
        const sparrowHawkResult = new SparrowHawkResult();

        sparrowHawkResult.sparrowHawkAttackProbability = this.robinModel.sparrowHawkAttackProbability;
        if (this.decision === DecisionEnum.FitFeeding) {
            sparrowHawkResult.sparrowHawkAttackProbability = this.config.sparrowHawkAttackProbabilityWhenFitFeeding;
        }

        sparrowHawkResult.sparrowHawkAttackSuccessBaseProbability = this.robinModel.sparrowHawkAttackSuccessBaseProbability;
        sparrowHawkResult.wingMod = (SparrowAttackWingMod.get(this.robinModel.wingType) ?? 1) - 1;
        sparrowHawkResult.sparrowHawkAttackSuccessFinalProbability = this.getSparrowHawkAttackSuccessFinalProbability(this.robinModel);
        sparrowHawkResult.fatMod = this.sparrowHawkFatTissueMod;
        sparrowHawkResult.experienceMod = this.sparrowHawkExperienceMod;

        let deathMod = this.config.sparrowHawkAttackDeathProbability;

        // Kara za zbyt długie bycie otyłym rudzikiem to dodatkowe 10% za każdy kolejny dzień powyżej limitu.
        if (this.robinModel.overweightDay > this.robinModel.numberOfSafeOverweightDays) {
            deathMod += (this.robinModel.overweightDay - this.robinModel.numberOfSafeOverweightDays) / 10;
        }

        sparrowHawkResult.deathChance = deathMod * this.getSparrowHawkAttackSuccessFinalProbability(this.robinModel);

        sparrowHawkResult.injuresChance = (1 - deathMod) * this.getSparrowHawkAttackSuccessFinalProbability(this.robinModel);
        sparrowHawkResult.attack = true;

        const rand2 = Math.random();

        if (rand2 < this.robinModel.sparrowHawkAttackProbability) {
            sparrowHawkResult.attack = true;
        } else {
            sparrowHawkResult.health = Health.Healthy;
            sparrowHawkResult.attack = false;
            return sparrowHawkResult;
        }

        const rand = Math.random();

        if (rand > this.getSparrowHawkAttackSuccessFinalProbability(this.robinModel) || this.robinModel.turn == 1) {
            sparrowHawkResult.health = Health.Healthy;
        } else if (rand > sparrowHawkResult.deathChance) {
            sparrowHawkResult.health = Health.Injured;
        } else {
            sparrowHawkResult.health = Health.Dead;
        }

        return sparrowHawkResult;
    }

    public getSparrowHawkAttackSuccessFinalProbability(robinModel: RobinModel): number {
        const wingMod = SparrowAttackWingMod.get(robinModel.wingType) ?? 1;
        const value = robinModel.sparrowHawkAttackSuccessBaseProbability * wingMod - this.sparrowHawkExperienceMod + robinModel.fatTissue / 100;
        return value > 0 ? value : 0;
    }
}
