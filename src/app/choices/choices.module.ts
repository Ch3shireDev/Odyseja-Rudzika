import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChoicesComponent } from './choices.component';
import { IonicModule } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';


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
  declarations: [ChoicesComponent, ResultComponent],
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
