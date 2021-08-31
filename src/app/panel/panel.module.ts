import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { SQLite } from '@ionic-native/sqlite/ngx';


const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }


@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    PanelRoutingModule,
    RouterModule
  ],
  bootstrap: [PanelComponent],
  providers: [
    DatabaseService,
    SQLite
  ]
})
export class PanelModule { }
