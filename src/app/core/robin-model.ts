import { Coordinates } from "./coordinates";
import { Direction, FeedingGround, Health, Sex, WingType } from "./enums";
import { WeatherModel } from "./weather-model";

export class RobinModel {
    public name = "Remus";
    public sex: Sex = Sex.Male;
    public currentDate: Date = new Date("2021-09-01");
    public fatTissue = 2;
    public weather = new WeatherModel();
    public wingType: WingType = WingType.Neutral;
    public feedingGround: FeedingGround = FeedingGround.Good;
    public directionType: Direction = Direction.Spain;
    public currentLocation: Coordinates = new Coordinates(54.51, 18.42);
    public finalLocation: Coordinates = new Coordinates(36.12, -5.37);
    public sparrowHawkAttacksSurvived = 0;
    public sparrowHawkAttackProbability = 0.5;
    public glassSkyscraperCollisions = 0;
    public weatherBreakdowns = 0;
    public lostInTheMist = 0;
    public distance = 0;
    public sparrowHawkAttackSuccessBaseProbability = 0.25;
    public health: Health = Health.Healthy;
    public turn = 1;
    public injuredDays = 0;
    public overweightLevel = 10;
    public numberOfSafeOverweightDays = 3;
    public overweightDay = 0;

}