import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RobinService } from '../robin.service';

declare var mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(private robin: RobinService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loadMap();
  }

  async loadMap() {
    let robin = await this.robin.getRobin(1);
    let coords = robin.currentLocation;
    let goal = robin.finalLocation;
    let lat = coords.latitude;
    let long = coords.longitude;

    mapboxgl.accessToken = environment.access_token;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [long, lat],
      zoom: 3,
    });

    robin.locations.forEach(loc => {

      new mapboxgl.Marker()
        .setLngLat([loc.longitude, loc.latitude])
        .addTo(map);

    });

    new mapboxgl.Marker({ color: 'green' })
      .setLngLat([goal.longitude, goal.latitude])
      .addTo(map);

    map.on('load', function () { map.resize(); });
  }

}
