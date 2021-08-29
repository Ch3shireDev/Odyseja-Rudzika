import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  public data: RobinData;

  constructor() { }

  ngOnInit() {
    this.data = new RobinData();
    this.data.name = "Remus";
  }

}

class RobinData {
  name: string;
  condition: string;
  foraging: string;
  weather: string;
  location: string;
  decision: string;
}
