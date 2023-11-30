import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  loadingEvents = false;

  eventList: Event[] = [];

  constructor(private data: EventService) {}
  ngOnInit() {
    this.getEventList();
  }
  get mensaje(): string {
    if (this.loadingEvents) {
      return 'Cargando...';
    } else {
      return this.eventList.length > 0
        ? `${this.eventList.length} registros encontrados.`
        : 'No se han encontrado registros...';
    }
  }

  get totalSales(): number {
    if (this.loadingEvents) {
      return 0;
    } else {
      return this.eventList.reduce((total, event) => total + (event.price * event.totalSoldTickets), 0);    }
  }
  private getEventList() {
    this.loadingEvents = true;

    this.data.getEventList().subscribe((x) => {
      this.loadingEvents = false;
      this.eventList = x;
    });
  }
}
