import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-victory',
  templateUrl: './victory.component.html',
  styleUrls: ['./victory.component.scss'],
})
export class VictoryComponent implements OnInit {

  constructor(private popover:PopoverController) { }

  ngOnInit() {}

  close(){
    this.popover.dismiss();
  }
}
