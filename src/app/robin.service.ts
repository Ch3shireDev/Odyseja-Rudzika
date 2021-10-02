import { Injectable } from '@angular/core';
import { Config } from '../core/config';
import { DecisionModel } from '../core/decision-model';
import { Result } from '../core/result';
import { Robin } from '../core/robin';
import { RobinModel } from '../core/robin-model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class RobinService {
  async restart() {
    await this.database.dropDatabase();
    await this.database.createDatabase();
  }

  constructor(private database: DatabaseService) { }

  async makeDecision(id: number, decision: DecisionModel): Promise<Result> {
    const robinModel = await this.database.getRobin(id);
    const config = new Config();
    const robin = new Robin(config, robinModel);
    const result = robin.sendDecision(decision);
    if (result.success) {
      robin.setResult(result);
      await this.database.updateRobin(id, robin.robinModel);
    }
    return new Promise<Result>((resolve, _) => {
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
