import { EventEmitter, ChangeDetectorRef, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { WeekDay, CalendarEvent, WeekViewEvent, WeekViewEventRow } from 'calendar-utils';
import { ResizeEvent } from 'angular-resizable-element';
import { CalendarEventTimesChangedEvent } from '../../interfaces/calendarEventTimesChangedEvent.interface';
/**
 * Shows all events on a given week. Example usage:
 *
 * ```
 * &lt;mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events"&gt;
 * &lt;/mwl-calendar-week-view&gt;
 * ```
 */
export declare class CalendarWeekViewComponent implements OnChanges, OnInit, OnDestroy {
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
     * Called when a header week day is clicked
     */
    dayClicked: EventEmitter<{
        date: Date;
    }>;
    /**
     * Called when the event title is clicked
     */
    eventClicked: EventEmitter<{
        event: CalendarEvent;
    }>;
    /**
     * Called when an event is resized or dragged and dropped
     */
    eventTimesChanged: EventEmitter<CalendarEventTimesChangedEvent>;
    /**
     * @hidden
     */
    days: WeekDay[];
    /**
     * @hidden
     */
    eventRows: WeekViewEventRow[];
    /**
     * @hidden
     */
    refreshSubscription: Subscription;
    /**
     * @hidden
     */
    currentResize: {
        originalOffset: number;
        originalSpan: number;
        edge: string;
    };
    /**
     * @hidden
     */
    validateDrag: Function;
    /**
     * @hidden
     */
    validateResize: Function;
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
    resizeStarted(weekViewContainer: HTMLElement, weekEvent: WeekViewEvent, resizeEvent: ResizeEvent): void;
    /**
     * @hidden
     */
    resizing(weekEvent: WeekViewEvent, resizeEvent: ResizeEvent, dayWidth: number): void;
    /**
     * @hidden
     */
    resizeEnded(weekEvent: WeekViewEvent): void;
    /**
     * @hidden
     */
    eventDragged(weekEvent: WeekViewEvent, draggedByPx: number, dayWidth: number): void;
    /**
     * @hidden
     */
    getDayColumnWidth(eventRowContainer: HTMLElement): number;
    /**
     * @hidden
     */
    dragStart(weekViewContainer: HTMLElement, event: HTMLElement): void;
    private refreshHeader();
    private refreshBody();
    private refreshAll();
}
