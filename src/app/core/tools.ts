import { FeedingGround, Rainfall, WindDirection, WindType } from "./enums";
import { WeatherModel } from "./weather-model";

export function getFeedingGround(): FeedingGround {
    const rand = Math.random();
    if (rand < 0.1) return FeedingGround.VeryWeak;
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

function getWindType(): WindType {
    const random = Math.floor(Math.random() * 6);
    return random as WindType;
}
function getWindDirection(): WindDirection {
    const random = Math.floor(Math.random() * 3);
    return random as WindDirection;
}
function getRainfall(): Rainfall {
    const random = Math.floor(Math.random() * 6);
    return random as Rainfall;
}

function getTemperature(): number {
    const minTemp = -5;
    const maxTemp = 30;
    const random = Math.floor(Math.random() * (maxTemp - minTemp));
    return minTemp + random;
}