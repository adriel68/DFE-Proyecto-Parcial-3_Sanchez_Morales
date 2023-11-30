import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { EventCardComponent } from './event-card/event-card.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule, EventCardComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class DashboardModule { }
