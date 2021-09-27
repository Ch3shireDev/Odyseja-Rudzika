import { Config } from "./config";
import { RobinModel } from "./robin-model";

export class WeatherBreakdown {

    public constructor(public config: Config, public robinModel: RobinModel, public distance: number) {

    }

    public getResult(): WeatherBreakdownResult {
        // Załamanie pogody występuje w jednym (trasa atlantycka) lub dwu (trasa alpejska i bałkańska) miejscach na
        // odcinku 50 km. Miejsce wystąpienia zjawiska na trasie jest losowe i dla wszystkich graczy takie samo. Jeśli
        // rudzik trafi w czasie przelotu na załamanie pogody, to siada na jego 5 km (niezależnie jak daleko chciał 
        // lecieć). Traci przy tym 3 jednostki tłuszczu i w danym ruchu nie może zmienić żerowiska. Za to oszczędza 
        // tłuszcz wynikający z nieprzebytego odcinka.

        if (this.robinModel.weatherBreakdowns > 0) return WeatherBreakdownResult.NoBreakdown();

        const r = Math.random();
        if (r < this.config.weatherBreakdownProbability) {
            return WeatherBreakdownResult.Breakdown(this.config.weatherBreakdownFatCost);
        }

        // TODO: Dokończyć.
        return WeatherBreakdownResult.NoBreakdown();
    }

}

export class WeatherBreakdownResult {
    public breakdown = false;
    public fatUsed: number;
    public distance = 5000;
    constructor(breakdown: boolean, fatUsed: number) {
        this.breakdown = breakdown;
        this.fatUsed = fatUsed;
    }

    static NoBreakdown() {
        return new WeatherBreakdownResult(false, 0);
    }

    static Breakdown(fatUsed: number) {
        return new WeatherBreakdownResult(true, fatUsed);
    }

}