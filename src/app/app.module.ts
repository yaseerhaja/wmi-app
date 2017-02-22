import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from './calender/index';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
	CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
