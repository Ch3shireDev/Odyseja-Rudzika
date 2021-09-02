import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import * as moment from 'moment';
import { DatabaseService } from '../database.service';
import { RobinData } from '../models/robin';
import { DecisionEnum, DecisionLabels } from '../decision.enum';
import { RobinService } from '../robin.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent implements OnInit {
  timeEnd: Date;
  deltaTime: string;
  currentDate: Date;
  robinData: RobinData;
  decisions = DecisionEnum;
  decisionLabels = DecisionLabels;
  decision: DecisionEnum;

  constructor(private database: DatabaseService, private robinService: RobinService) { }

  ngOnInit() {
    // this.database.getCurrentDate().then(date => {
    //   this.currentDate = date;
    // })

    this.database.getRobinData().then(robinData => {
      this.robinData = robinData;
    })

    // this.timeEnd = moment().add(12, 'hours').toDate();

    // interval(1000).subscribe(() => {
    //   var date1 = new Date();
    //   var diff = Math.floor((this.timeEnd.getTime() - date1.getTime()) / 1000);
    //   var hours = Math.floor(diff / (3600)).toString().padStart(2, "0");
    //   var minutes = Math.floor(diff % 3600 / 60).toString().padStart(2, "0");
    //   var seconds = Math.floor(diff % 60).toString().padStart(2, "0");
    //   this.deltaTime = `${hours}:${minutes}:${seconds}`;
    // });

  }

  onDayEnd() {
    console.log("decision")
    this.robinService.makeDecision(this.robinData, this.decision)
      .then((result) => {
        console.log('aaa')
        console.log(result);
        this.database.getRobinData().then((robinData) => {
          this.robinData = robinData;
          console.log(this.currentDate)
        })
      });
  }

}
