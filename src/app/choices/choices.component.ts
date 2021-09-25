import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { RobinService } from '../robin.service';
import { RobinLabels } from '../core/robin-labels';
import { DecisionEnum } from '../core/enums';
import { DecisionLabels } from '../core/labels';
import { RobinModel } from '../core/robin-model';
import { LabelResult } from '../core/label-result';
import { DecisionModel } from '../core/decision-model';
import { Decision } from '../core/decision';

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
  decision: DecisionModel;
  decisionValue:DecisionEnum;
  public result: LabelResult;

  get robinModel(): RobinModel {
    return this.robin.robinModel;
  }

  constructor(private database: DatabaseService, private robinService: RobinService) { }

  ngOnInit() {

    this.robin = this.robinService.getRobin();
    // this.result = this.robin.getResultLabel(this.decision);

  }

  submit() {
    this.robinService.makeDecision(this.decision)
      .then((result) => {
       
      });
  }

  setDecision(event: any) {
    this.decision = new DecisionModel();
    this.decision.fatUsed = this.robinModel.fatTissue;
    this.decision.decision = this.decisionValue;
    console.log(event);
    this.result = this.robin.getResultLabel(this.decision);
  }




}
