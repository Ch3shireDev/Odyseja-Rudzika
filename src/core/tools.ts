import { FeedingGround, Rainfall, WindDirection, WindType } from "./enums";
import { WeatherModel } from "./weather-model";

export function getFeedingGround(): FeedingGround {
    const rand = Math.random();
    if (rand < 0) return FeedingGround.VeryWeak;
    else if (rand < 0.25) return FeedingGround.Weak;
    else if (rand < 0.75) return FeedingGround.Medium;
    else return FeedingGround.Good;
}

export function getWeather(): WeatherModel {
    const weather = new WeatherModel();
    weather.rainfall = getRainfall();
    weather.temperature = getTemperature();
    weather.windDirection = getWindDirection();
    weather.windType = getWindType();
    return weather;
}

export function getWindType(): WindType {
    const random = Math.random();
    if (random < 0.4) return WindType.None;
    if (random < 0.5) return WindType.WeakWind;
    if (random < 0.6) return WindType.MediumWind;
    if (random < 0.95) return WindType.StrongWind;
    if (random < 0.99) return WindType.VeryStrongWind;
    return WindType.Hurricane;
}

export function getWindDirection(): WindDirection {
    const random = Math.floor(Math.random() * 3);
    return random as WindDirection;
}

export function getRainfall(): Rainfall {
    const random = Math.random();
    if (random < 0.3) return Rainfall.None;
    if (random < 0.5) return Rainfall.Sprinkle;
    if (random < 0.6) return Rainfall.LightRain;
    if (random < 0.95) return Rainfall.ModerateRain;
    if (random < 0.99) return Rainfall.HeavyRain;
    return Rainfall.ViolentRain;
}

export function getTemperature(): number {
    const minTemp = -5;
    const maxTemp = 30;
    const random = Math.floor(Math.random() * (maxTemp - minTemp));
    return minTemp + random;
}

export function toKm(distance: number, fixed = 1): string {
    return (distance / 1000).toFixed(fixed);
}