import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  public data: RobinData;
  public decisions: { id: number, name: string }[];

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.data = new RobinData();
    this.data.name = "Remus";
    this.decisions = [];
    this.database.getDecisions().then(d => { this.decisions = d; })
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
