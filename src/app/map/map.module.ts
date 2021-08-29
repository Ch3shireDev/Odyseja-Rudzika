import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map.component';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DatabaseService } from '../database.service';


const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MapRoutingModule
  ],
  providers:[
    SQLite,
    DatabaseService
  ]
})
export class MapModule { }
