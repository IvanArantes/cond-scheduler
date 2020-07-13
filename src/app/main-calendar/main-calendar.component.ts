import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { colors } from '../utils/colors';

@Component({
  selector: 'main-calendar-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-calendar.component.html',
})
export class MainCalendarComponent {
  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 3),
      color: colors.red,
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      color: colors.blue,
    },
  ];
}
