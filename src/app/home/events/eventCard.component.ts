import { Component, Input } from '@angular/core';
import { Event } from './events.component';

@Component({
  selector: 'app-event-card',
  template: `
    <div class="eventCard" tabindex="0">
      <div class="cover ratio-wrapper">
        <img [src]="event.imageUrl" alt="" class="ratio-wrapper__el">
      </div>
      <div class="body">
        <h4>{{ event.title }}</h4>
        <p class="date">{{ event.date }}</p>
        <div>
          <span class="category" [style.background-color]="event.categoryColor">{{ event.category }}</span>
        </div>
      </div>
    </div>
  `
})
export class EventCardComponent {
  @Input() event!: Event;
}