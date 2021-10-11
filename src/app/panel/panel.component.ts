import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RobinLabels } from '../../core/robin-labels';
import { DatabaseService } from '../database.service';
import { MapService } from '../map.service';
import { RobinService } from '../robin.service';
import { VictoryComponent } from './victory/victory.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  public robin: RobinLabels;
  public decisions: { id: number, name: string; }[];
  public location: string;
  constructor(
    private database: DatabaseService,
    private robinSerivce: RobinService,
    private popoverController: PopoverController,
    private router: Router,
    private map: MapService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.decisions = [];
    this.database.getDecisions().then(d => { this.decisions = d; });
    const robin = await this.robinSerivce.getRobin(1);
    this.robin = new RobinLabels(robin);
    if (this.robin.victory) this.showPopover();
    this.map.reverseGeocoding(this.robin.robinModel.currentLocation).subscribe(x => {this.location = x;});

  }


  async showPopover() {
    const popover = await this.popoverController.create({
      component: VictoryComponent,
      translucent: true,
      animated: true,
      cssClass: 'fullscreen'
    });

    await popover.present();
    await popover.onDidDismiss();
    this.router.navigateByUrl('/panel');
  }

}

