import { Component, OnInit } from '@angular/core';
import { RobinLabels } from '../core/robin-labels';
import { DatabaseService } from '../database.service';
import { RobinService } from '../robin.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  public robin: RobinLabels;
  public decisions: { id: number, name: string; }[];

  constructor(private database: DatabaseService, private robinSerivce: RobinService) { }

  ngOnInit() {
    // this.database.getRobinData().then(data => {
    //   this.robinData = data;
    // });

    this.decisions = [];
    this.database.getDecisions().then(d => { this.decisions = d; });
    this.robin = this.robinSerivce.getRobin();
  }

}

