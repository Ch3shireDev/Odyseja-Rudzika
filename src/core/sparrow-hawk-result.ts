import { Health } from "./enums";

export class SparrowHawkResult {
  public attack = false;
  public health: Health = Health.Healthy;
  public sparrowHawkAttackProbability?: number;
  public sparrowHawkAttackSuccessBaseProbability?: number;
  public wingMod?: number;
  public fatMod?: number;
  public sparrowHawkAttackSuccessFinalProbability?: number;
  public injuresChance?: number;
  public deathChance?: number;
  public experienceMod?: number;
  public message: string;
}