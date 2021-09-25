import { Component, OnInit } from '@angular/core';
import { RobinService } from '../robin.service';
import { RobinLabels } from '../core/robin-labels';
import { DecisionEnum } from '../core/enums';
import { DecisionLabels } from '../core/labels';
import { RobinModel } from '../core/robin-model';
import { LabelResult } from '../core/label-result';
import { DecisionModel } from '../core/decision-model';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ResultComponent } from './result/result.component';
import { Result } from '../core/result';

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
  decisionValue: DecisionEnum;
  public result: LabelResult;
  robinModel: RobinModel;


  constructor(private robinService: RobinService, private router: Router,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.robinService.getRobin(1).then((robin) => {
      this.robinModel = robin;
      this.robin = new RobinLabels(robin);
    });
    // this.robin = this.robinService.getRobin();
    // this.result = this.robin.getResultLabel(this.decision);  
  }


  submit() {
    this.robinService.makeDecision(this.robinModel.id, this.decision)
      .then((result) => {
        // this.router.navigateByUrl('/panel');
        this.showPopover(result);
      });
  }

  async showPopover(result: Result) {
    const popover = await this.popoverController.create({
      component: ResultComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      animated: true,
      componentProps: { 'result': result }
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  setDecision(_event) {
    this.decision = new DecisionModel();
    this.decision.fatUsed = this.robinModel.fatTissue;
    this.decision.decision = this.decisionValue;
    this.result = this.robin.getResultLabel(this.decision);
  }




}
