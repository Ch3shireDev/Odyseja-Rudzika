import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { RobinService } from '../robin.service';
import { RobinLabels } from '../core/robin-labels';
import { DecisionEnum } from '../core/enums';
import { DecisionLabels } from '../core/labels';
import { RobinModel } from '../core/robin-model';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent implements OnInit {
  timeEnd: Date;
  deltaTime: string;
  currentDate: Date;
  robin: RobinLabels;
  decisions = DecisionEnum;
  decisionLabels = DecisionLabels;
  decision: DecisionEnum;
  public flyFat: number;

  get robinModel(): RobinModel {
    return this.robin.robinModel;
  }

  constructor(private database: DatabaseService, private robinService: RobinService) { }

  ngOnInit() {

    this.robin = this.robinService.getRobin();
    this.flyFat = this.robinModel.fatTissue;
    // this.database.getCurrentDate().then(date => {
    //   this.currentDate = date;
    // })

    // this.database.getRobinData().then(robinData => {
    //   this.robinData = robinData;
    // });

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
    // console.log("decision");
    // this.robinService.makeDecision(this.robinData, this.decision)
    //   .then((result) => {
    //     console.log('aaa');
    //     console.log(result);
    //     this.database.getRobinData().then((robinData) => {
    //       this.robinData = robinData;
    //       console.log(this.currentDate);
    //     });
    //   });
  }




}
