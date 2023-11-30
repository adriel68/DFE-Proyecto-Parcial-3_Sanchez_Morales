import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { VentasModule } from './pages/ventas/ventas.module';
import { EventService } from './services/event.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    DashboardModule,
    VentasModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
