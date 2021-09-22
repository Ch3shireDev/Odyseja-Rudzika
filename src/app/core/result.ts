import { Coordinates } from "./coordinates";
import { DecisionEnum, FeedingGround, Health } from "./enums";
import { RobinModel } from "./robin-model";
import { SparrowHawkResult } from "./sparrow-hawk-result";
import { WeatherModel } from "./weather-model";

export class Result {
  public success = true;
  public newDay = false;
  public decision?: DecisionEnum = DecisionEnum.FitFeeding;
  public distance = 0;
  public errorMessage?: string;
  public expectedResult = "";
  public conditions?: string;
  public sparrowHawkAttack = false;
  public sparrowHawk?: SparrowHawkResult;
  public health: Health = Health.Healthy;
  public location: Coordinates;
  public fatGained = 0;
  public fatUsed = 0;
  public weatherBreakdown = false;
  public mist = false;
  public expectedDistance = 0;
  public feedingGround = FeedingGround.Medium;
  public skyscraperCollision = false;
  public additionalMessage?: string;
  public expectedLocation?: Coordinates;
  public weather: WeatherModel;
  public get isDead(): boolean {
    return this.health === Health.Dead;
  }

  constructor(robinModel: RobinModel) {
    this.feedingGround = robinModel.feedingGround;
    this.location = robinModel.currentLocation;
    this.weather = robinModel.weather;
    this.health = robinModel.health;
  }

  static Error(robinModel: RobinModel, message: string): Result {
    const result = new Result(robinModel);
    result.success = false;
    result.errorMessage = message;
    return result;
  }

}
