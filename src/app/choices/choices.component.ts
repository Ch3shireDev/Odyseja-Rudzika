import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import * as moment from 'moment';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent implements OnInit {
  timeEnd: Date;
  deltaTime: string;


  constructor(private database: DatabaseService) { }

  ngOnInit() {

    this.timeEnd = moment().add(12, 'hours').toDate();

    interval(1000).subscribe(() => {
      var date1 = new Date();
      var diff = Math.floor((this.timeEnd.getTime() - date1.getTime()) / 1000);
      var hours = Math.floor(diff / (3600)).toString().padStart(2, "0");
      var minutes = Math.floor(diff % 3600 / 60).toString().padStart(2, "0");
      var seconds = Math.floor(diff % 60).toString().padStart(2, "0");
      this.deltaTime = `${hours}:${minutes}:${seconds}`;
    });

  }

  onDayEnd() {

  }

}
