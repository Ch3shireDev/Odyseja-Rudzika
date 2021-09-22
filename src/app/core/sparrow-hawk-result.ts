import { Health } from "./enums";

export class SparrowHawkResult {

  // Czy atak nastąpił.
  public attack = false;
  // Zdrowie rudzika po ataku.
  public health: Health = Health.Healthy;
  public sparrowHawkAttackProbability?: number;
  public sparrowHawkAttackSuccessBaseProbability?: number;
  public wingMod?: number;
  public fatMod?: number;
  // public fatTissue?: number;
  public sparrowHawkAttackSuccessFinalProbability?: number;
  public injuresChance?: number;
  public deathChance?: number;
  public experienceMod?: number;
}