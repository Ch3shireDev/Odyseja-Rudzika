import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Coordinates } from 'src/core/coordinates';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  reverseGeocoding(coordinates: Coordinates) {
    const endpoint = 'mapbox.places';
    const longitude = coordinates.longitude;
    const latitude = coordinates.latitude;
    const access_token = environment.access_token;

    // return this.http.get(`https://api.mapbox.com/geocoding/v5/${endpoint}/${longitude.toFixed(3)},${latitude.toFixed(3)}.json`, { "params": params });
    return this.http.get(`https://api.mapbox.com/geocoding/v5/${endpoint}/${longitude.toFixed(3)},${latitude.toFixed(3)}.json?access_token=${access_token}&language=pl`).pipe(map((data: any) => {
      console.log(data);
      return data.features[2].place_name_pl;
    }));
  }
}
