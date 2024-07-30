import { Component, OnInit } from '@angular/core';

export interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  ngOnInit() {
    this.events = this.getEvents();
  }

  trackByEventId(index: number, event: Event): number {
    return event.id;
  }

  private getEvents(): Event[] {
    return [
      {
        id: 1,
        title: 'طبب التاريخية',
        date: 'Monday, Aug 5, 2024, 4:00:00 PM',
        category: 'مهرجان',
        categoryColor: 'rgb(228, 180, 0)',
        imageUrl:
          'https://storage.googleapis.com/evento_prod_bucket/images/826c1e70-4d9e-11ef-a825-413ce7de28ef.png',
      },
      {
        id: 2,
        title: ' سحابة في ابها',
        date: 'Saturday, Aug 31, 2024, 4:00:00 PM',
        category: 'مهرجان',
        categoryColor: 'rgb(228, 180, 0)',
        imageUrl:
          'https://storage.googleapis.com/evento_prod_bucket/images/2ce691c0-4b36-11ef-811c-1b96958d8aa9.png',
      },
      {
        id: 3,
        title: 'فعالية ارياش',
        date: 'Tuesday, Jul 30, 2024, 4:00:00 PM',
        category: 'مهرجان',
        categoryColor: 'rgb(228, 180, 0)',
        imageUrl:
          'https://storage.googleapis.com/evento_prod_bucket/images/dac7ff30-490c-11ef-8365-b5c02d88803a.png',
      },
      {
        id: 4,
        title: 'فعالية ملفى',
        date: 'Tuesday, Jul 30, 2024, 4:00:00 PM',
        category: 'مهرجان',
        categoryColor: 'rgb(228, 180, 0)',
        imageUrl:
          'https://storage.googleapis.com/evento_prod_bucket/images/e07e8390-4817-11ef-ae35-f7760a549c57.png',
      },
      {
        id: 5,
        title: 'Southwest cowboy town',
        date: 'Tuesday, Aug 6, 2024, 4:30:00 PM',
        category: 'مهرجان',
        categoryColor: 'rgb(228, 180, 0)',
        imageUrl:
          'https://storage.googleapis.com/evento_prod_bucket/images/d6c41a40-4687-11ef-bc07-790d3bdf1522.png',
      },
      {
        id: 6,
        title: 'MYADEEN Membership',
        date: 'Wednesday, Jul 31, 2024, 4:00:00 PM',
        category: 'مهرجان',
        categoryColor: 'rgb(228, 180, 0)',
        imageUrl:
          'https://storage.googleapis.com/evento_prod_bucket/images/8def0310-99d1-11ee-a8ad-010b96ee1452.png',
      },
      {
        id: 7,
        title: 'MAYDEEN',
        date: 'Saturday, Aug 31, 2024, 4:00:00 PM',
        category: 'مهرجان',
        categoryColor: 'rgb(228, 180, 0)',
        imageUrl:
          'https://storage.googleapis.com/evento_prod_bucket/images/2dcd30b0-8d56-11ee-b3c3-4795f236d89c.png',
      },
    ];
  }
}
