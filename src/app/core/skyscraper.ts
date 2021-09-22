import { Config } from "./config";
import { Health } from "./enums";
import { RobinModel } from "./robin-model";

export class Skyscraper {
    constructor(private config: Config, private robinModel: RobinModel, private distance: number) {
        this.robinModel = robinModel;
        this.distance = distance;
    }
    calculateResult(): SkyscraperResult {
        if (this.robinModel.glassSkyscraperCollisions > 0) return SkyscraperResult.NoCollision(this.distance);
        for (let distance = 0; distance < this.distance; distance += 1000) {
            const r1 = Math.random();
            if (r1 > this.config.skyscraperCollisionProbability) continue;
            const r2 = Math.random();
            if (r2 > this.config.skyscraperCollisionDeathChance) return SkyscraperResult.Collision(distance, Health.Injured);
            else return SkyscraperResult.Collision(distance, Health.Dead);
        }
        return SkyscraperResult.NoCollision(this.distance);
    }
}

export class SkyscraperResult {
    public collision: boolean;
    public distance: number;
    public health: Health;
    constructor(collision: boolean, distance: number, health: Health) {
        this.collision = collision;
        this.distance = distance;
        this.health = health;
    }

    public static NoCollision(distance: number) {
        return new SkyscraperResult(false, distance, Health.Healthy);
    }

    public static Collision(distance: number, health: Health) {
        return new SkyscraperResult(true, distance, health);
    }
}
