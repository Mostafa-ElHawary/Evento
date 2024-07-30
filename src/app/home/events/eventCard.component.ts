import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Event } from './events.component';

@Component({
  selector: 'app-event-card',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="eventCard bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden " tabindex="0">
      <div class="cover ratio-wrapper">
        <img [src]="event.imageUrl" alt="" class="ratio-wrapper__el">
      </div>
      <div class="body p-3">
        <h4 class="text-2xl">{{ event.title }}</h4>
        <p class="date pb-3 text-lg text-gray-400">{{ event.date }}</p>
        <div>
          <span class="category text-white p-1.5 rounded-lg " [style.background-color]="event.categoryColor">{{ event.category }}</span>
        </div>
      </div>
    </div>
    <!-- <div
      class="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
      tabindex="0"
    >
      <div class="relative pb-2/3">
        <img
          [src]="event.imageUrl"
          [alt]="event.title"
          class="absolute h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div class="p-4">
        <h4 class="text-lg font-semibold text-gray-800 mb-2 truncate">
          {{ event.title }}
        </h4>
        <p class="text-sm text-gray-600 mb-3">
          {{ event.date | date : 'medium' }}
        </p>
        <div>
          <span
            class="inline-block px-3 py-1 text-sm font-semibold text-white rounded-full"
            [style.background-color]="event.categoryColor"
          >
            {{ event.category }}
          </span>
        </div>
      </div>
    </div> -->
  `,
})
export class EventCardComponent {
  @Input() event!: Event;
}
