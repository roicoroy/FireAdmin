import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FireAdminModule } from 'fire-admin';
import { FireAdminModule } from 'projects/fire-admin/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FireAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
