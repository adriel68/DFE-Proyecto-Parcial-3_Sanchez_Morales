import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from 'src/app/models/event';
import { RouterLink, RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="Event.image"
        alt="Exterior photo of {{ Event.name }}"
      />
      <h2 class="listing-heading">{{ Event.name }}</h2>
      <p class="listing-location">
        {{ Event.location }}
      </p>
      <!-- <a [routerLink]="['/details', Event.id]">Learn More</a> -->
    </section>
  `,
})
export class EventCardComponent {
  @Input() Event!: Event;

}
