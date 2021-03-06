import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule, DraggableHelper } from 'angular-draggable-droppable';
import { CalendarDayViewComponent } from './components/day/calendarDayView.component';
import { CalendarWeekViewComponent } from './components/week/calendarWeekView.component';
import { CalendarMonthViewComponent } from './components/month/calendarMonthView.component';
import { CalendarEventActionsComponent } from './components/common/calendarEventActions.component';
import { CalendarEventTitleComponent } from './components/common/calendarEventTitle.component';
import { CalendarMonthCellComponent } from './components/month/calendarMonthCell.component';
import { CalendarOpenDayEventsComponent } from './components/month/calendarOpenDayEvents.component';
import { CalendarWeekViewHeaderComponent } from './components/week/calendarWeekViewHeader.component';
import { CalendarWeekViewEventComponent } from './components/week/calendarWeekViewEvent.component';
import { CalendarAllDayEventComponent } from './components/day/calendarAllDayEvent.component';
import { CalendarDayViewHourSegmentComponent } from './components/day/calendarDayViewHourSegment.component';
import { CalendarDayViewEventComponent } from './components/day/calendarDayViewEvent.component';
import { CalendarTooltipWindowComponent, CalendarTooltipDirective } from './directives/calendarTooltip.directive';
import { CalendarPreviousViewDirective } from './directives/calendarPreviousView.directive';
import { CalendarNextViewDirective } from './directives/calendarNextView.directive';
import { CalendarTodayDirective } from './directives/calendarToday.directive';
import { CalendarDatePipe } from './pipes/calendarDate.pipe';
import { CalendarEventTitlePipe } from './pipes/calendarEventTitle.pipe';
import { CalendarEventTitleFormatter } from './providers/calendarEventTitle.provider';
import { CalendarDateFormatter } from './providers/calendarDateFormatter.provider';
/**
 * The main module of this library. Example usage:
 *
 * ```
 * import { CalenderModule } from 'angular-calendar';
 *
 * &commat;NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
export var CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule.forRoot = function () {
        return {
            ngModule: CalendarModule,
            providers: [
                CalendarEventTitleFormatter,
                CalendarDateFormatter,
                DraggableHelper
            ]
        };
    };
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        CalendarDayViewComponent,
                        CalendarWeekViewComponent,
                        CalendarMonthViewComponent,
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent,
                        CalendarAllDayEventComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe
                    ],
                    imports: [
                        CommonModule,
                        ResizableModule,
                        DragAndDropModule
                    ],
                    exports: [
                        CalendarDayViewComponent,
                        CalendarWeekViewComponent,
                        CalendarMonthViewComponent,
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent,
                        CalendarAllDayEventComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe
                    ],
                    entryComponents: [
                        CalendarTooltipWindowComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());
//# sourceMappingURL=calendar.module.js.map