import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Health } from 'src/app/core/enums';
import { HealthLabel } from 'src/app/core/labels';
import { Result } from '../../core/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result: Result;
  constructor(private navParams: NavParams, private router: Router) { }

  ngOnInit() {
    console.table(this.navParams);
    this.result = this.navParams.data.result;
  }

  getHealthLabel(health: Health) {
    return HealthLabel.get(health);
  }

  onDidDismiss() {
    this.router.navigateByUrl('/panel');
  }

}
