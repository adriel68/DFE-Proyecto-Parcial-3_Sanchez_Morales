import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  eventsList: Event[] = [];
  
  constructor(private data: EventService) {

  }

  ngOnInit(): void {
    this.data.getEventList()
      .subscribe(events => {
        console.log(events);
        this.eventsList = events;
      });
  }

  get mensaje(): string {
    return this.eventsList.length > 0 ?
      `${this.eventsList.length} registros encontrados.` :
      'No se han encontrado registros...';
  }
}
