import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { RobinData } from '../models/robin';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  public robinData: RobinData;
  public decisions: { id: number, name: string }[];

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.getRobinData().then(data => {
      this.robinData = data;
    });

    this.decisions = [];
    this.database.getDecisions().then(d => { this.decisions = d; })
  }

}

