import { RobinModel } from "./robin-model";

export class Mist {
    public robinModel: RobinModel;
    public distance: number;
    static probability = 0.002;
    constructor(robinModel: RobinModel, distance: number) {
        this.robinModel = robinModel;
        this.distance = distance;
    }

    getResult() {
        if (Math.random() > Mist.probability) return new MistResult(false);
        const mists = this.robinModel.lostInTheMist;
        const distance = this.distance / (mists + 1);
        return new MistResult(true, distance);
    }
}

export class MistResult {
    constructor(public mist: boolean, public distance: number = 0) {
    }
}