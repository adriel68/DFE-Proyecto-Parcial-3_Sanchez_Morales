import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  @Input() eventList: Event[] = []; 
  @Input() loadingEvents = false;

  selectedEvent: Event | null = null;
}
