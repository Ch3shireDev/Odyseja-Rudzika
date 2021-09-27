import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map.component';
import { SQLite } from '@ionic-native/sqlite/ngx';


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
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    RouterModule
  ],
  providers:[
    SQLite,
    // DatabaseService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapModule { }
