import { Injectable } from '@angular/core';
import { Config } from './core/config';
import { DecisionModel } from './core/decision-model';
import { Result } from './core/result';
import { Robin } from './core/robin';
import { RobinModel } from './core/robin-model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class RobinService {

  constructor(private database: DatabaseService) { }

  async makeDecision(id: number, decision: DecisionModel): Promise<Result> {
    let robinModel = await this.database.getRobin(id);
    let config = new Config();
    let robin = new Robin(config, robinModel);
    let result = robin.sendDecision(decision);
    if (result.success) {
      robin.setResult(result);
      console.log(robinModel);
      await this.database.updateRobin(id, robinModel);
    }
    console.log(result);
    return new Promise<Result>((resolve, reject) => {
      resolve(result);
    });
  }

  getRobin(id: number): Promise<RobinModel> {
    return this.database.getRobin(id);
  }

  createRobin(): Promise<RobinModel> {
    return this.database.createRobin();
  }


}
