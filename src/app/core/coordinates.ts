export class Coordinates {

    static R = 6371e3;

    public constructor(public latitude: number, public longitude: number) {
    }

    public getBearing(destination: Coordinates) {

        const φ1 = this.latitude / 180 * Math.PI;
        const φ2 = destination.latitude / 180 * Math.PI;
        const λ1 = this.longitude / 180 * Math.PI;
        const λ2 = destination.longitude / 180 * Math.PI;

        const y = Math.sin(λ2 - λ1) * Math.cos(φ2);
        const x = Math.cos(φ1) * Math.sin(φ2) -
            Math.sin(φ1) * Math.cos(φ2) * Math.cos(λ2 - λ1);
        const θ = Math.atan2(y, x);
        const brng = (θ * 180 / Math.PI + 360) % 360; // in degrees
        return brng;
    }

    public add(distance: number, bearing: number): Coordinates {
        const brng = bearing * Math.PI / 180; // Convert bearing to radian
        let lat = this.latitude * Math.PI / 180; // Current coords to radians
        let lon = this.longitude * Math.PI / 180;

        // Do the math magic
        lat = Math.asin(Math.sin(lat) * Math.cos(distance / Coordinates.R) + Math.cos(lat) * Math.sin(distance / Coordinates.R) * Math.cos(brng));
        lon += Math.atan2(Math.sin(brng) * Math.sin(distance / Coordinates.R) * Math.cos(lat), Math.cos(distance / Coordinates.R) - Math.sin(lat) * Math.sin(lat));

        // Coords back to degrees and return
        return new Coordinates(lat * 180 / Math.PI, lon * 180 / Math.PI);

    }

    public distanceTo(direction: Coordinates): number {
        const lat1 = this.latitude;
        const lat2 = direction.latitude;
        const lon1 = this.longitude;
        const lon2 = direction.longitude;

        const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = Coordinates.R * c; // in metres

        return d;
    }
}


