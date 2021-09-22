import { Injectable } from '@angular/core';
import { DecisionEnum } from './core/enums';
import { RobinLabels } from './core/robin-labels';
import { RobinModel } from './core/robin-model';
import { DatabaseService } from './database.service';
// import { DecisionEnum } from './decision.enum';
import { DecisionResult } from './models/decision-result';
import { RobinData } from './models/robin';

@Injectable({
  providedIn: 'root'
})
export class RobinService {

  constructor(private database: DatabaseService) { }

  makeDecision(robinData: RobinData, decision: DecisionEnum): Promise<DecisionResult> {
    return new Promise<DecisionResult>((resolve, reject) => {
      let newDate = robinData.currentDate;
      newDate.setDate(newDate.getDate() + 1);
      this.database.updateDate(robinData.id, newDate)
        .then(() => {
          let dr = new DecisionResult();
          dr.message = "hello worldo";
          resolve(dr);
        });
    });
  }

  getRobin(): RobinLabels {
    return new RobinLabels(new RobinModel());
  }
}
