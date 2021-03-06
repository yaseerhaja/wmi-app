import { OnChanges, EventEmitter, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { CalendarEvent, WeekDay, MonthView, MonthViewDay } from 'calendar-utils';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { CalendarEventTimesChangedEvent } from '../../interfaces/calendarEventTimesChangedEvent.interface';
/**
 * Shows all events on a given month. Example usage:
 *
 * ```
 * &lt;mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events"&gt;
 * &lt;/mwl-calendar-month-view&gt;
 * ```
 */
export declare class CalendarMonthViewComponent implements OnChanges, OnInit, OnDestroy {
    private cdr;
    /**
     * The current view date
     */
    viewDate: Date;
    /**
     * An array of events to display on view
     */
    events: CalendarEvent[];
    /**
     * Whether the events list for the day of the `viewDate` option is visible or not
     */
    activeDayIsOpen: boolean;
    /**
     * A function that will be called before each cell is rendered. The first argument will contain the calendar cell.
     * If you add the `cssClass` property to the cell it will add that class to the cell in the template
     */
    dayModifier: Function;
    /**
     * An observable that when emitted on will re-render the current view
     */
    refresh: Subject<any>;
    /**
     * The locale used to format dates
     */
    locale: string;
    /**
     * The placement of the event tooltip
     */
    tooltipPlacement: string;
    /**
     * The start number of the week
     */
    weekStartsOn: number;
    /**
     * Called when the day cell is clicked
     */
    dayClicked: EventEmitter<{
        day: MonthViewDay;
    }>;
    /**
     * Called when the event title is clicked
     */
    eventClicked: EventEmitter<{
        event: CalendarEvent;
    }>;
    /**
     * Called when an event is dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarEventTimesChangedEvent>;
    /**
     * @hidden
     */
    columnHeaders: WeekDay[];
    /**
     * @hidden
     */
    view: MonthView;
    /**
     * @hidden
     */
    openRowIndex: number;
    /**
     * @hidden
     */
    openDay: MonthViewDay;
    /**
     * @hidden
     */
    refreshSubscription: Subscription;
    /**
     * @hidden
     */
    constructor(cdr: ChangeDetectorRef, locale: string);
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: any): void;
    /**
     * @hidden
     */
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    toggleDayHighlight(event: CalendarEvent, isHighlighted: boolean): void;
    /**
     * @hidden
     */
    eventDropped(day: MonthViewDay, event: CalendarEvent): void;
    private refreshHeader();
    private refreshBody();
    private checkActiveDayIsOpen();
    private refreshAll();
}
