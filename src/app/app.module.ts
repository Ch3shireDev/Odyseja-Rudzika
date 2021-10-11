import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import '@angular/common/locales/global/pl';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelModule } from './panel/panel.module';
import { ChoicesModule } from './choices/choices.module';
import { MapModule } from './map/map.module';
import { DatabaseService } from './database.service'; 
import { LOCALE_ID } from '@angular/core';
import { RobinService } from './robin.service';
import { MapService } from './map.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    PanelModule,
    ChoicesModule,
    MapModule, 
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  { provide: LOCALE_ID, useValue: 'pl' },
    DatabaseService,
    RobinService,
    MapService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
