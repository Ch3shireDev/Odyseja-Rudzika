import { Rainfall, WindType, WindDirection } from "./enums";
import { getRainLabel, getWindLabel } from "./labels";

export class WeatherModel {
    public temperature = 20;
    public rainfall: Rainfall = Rainfall.None;
    public windType: WindType = WindType.None;
    public windDirection: WindDirection = WindDirection.SideWind;

    public get windLabel(): string {
        return getWindLabel(this.windDirection, this.windType);
    }

    public get rainLabel(): string {
        return getRainLabel(this.rainfall);
    }
}
