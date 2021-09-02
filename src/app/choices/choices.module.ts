import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChoicesComponent } from './choices.component';
import { IonicModule } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ChoicesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoicesRoutingModule { }


@NgModule({
  declarations: [ChoicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChoicesRoutingModule,
    IonicModule,
    RouterModule
  ],
  providers: [
    // DatabaseService,
    SQLite
  ]
})
export class ChoicesModule { }
