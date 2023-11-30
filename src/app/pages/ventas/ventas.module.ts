import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplorerComponent } from './explorer/explorer.component';
import { ListingComponent } from './listing/listing.component';
import { ResumeComponent } from './resume/resume.component';
import { EventService } from 'src/app/services/event.service';
import { TotalSalesComponent } from './total-sales/total-sales.component';

@NgModule({
  declarations: [ExplorerComponent, ListingComponent, ResumeComponent, TotalSalesComponent],
  imports: [CommonModule],
  providers: [EventService],
  exports: [ExplorerComponent],
})
export class VentasModule {}
