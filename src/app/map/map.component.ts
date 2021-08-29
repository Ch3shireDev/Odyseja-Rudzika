import { Component, OnInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2gzc2hpcmUiLCJhIjoiY2tzeGZleHRqMDJnaDJwcDlla282cTJyNyJ9.IIin0Kdh7OrQ9Y4tyILxqg'
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/satellite-v9', // style URL
      center: [21, 52], // starting position [lng, lat]
      zoom: 3,
    });

    map.on('load', function () { map.resize(); })
    // console.log('ok')
  }

}
