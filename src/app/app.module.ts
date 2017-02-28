import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarModule } from './calender/index';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'calender',
    pathMatch: 'full'
  },
  {
    path: 'calender',
    component: AppComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
	CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
	HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
