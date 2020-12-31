import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MeetingService } from './Model/MeetingService.service';
import { FormsModule } from '@angular/forms';
import { MeetingsComponent } from './meetings/meetings.component';
import { ListMeetingComponent } from './meetings/list-meeting/list-meeting.component';
import { DetailsMeetingComponent } from './meetings/details-meeting/details-meeting.component';
import { AddMeetingComponent } from './meetings/add-meeting/add-meeting.component';

const appRoutes: Routes = [
  { path: '', component: MeetingsComponent },
  { path: 'details', component: DetailsMeetingComponent },
  { path: 'addMeeting', component: AddMeetingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListMeetingComponent,
    DetailsMeetingComponent,
    MeetingsComponent,
    AddMeetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [MeetingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
