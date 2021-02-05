import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListMeetingComponent } from './list-meeting/list-meeting.component';
import { MeetingService } from './Model/MeetingService.service';
import { DetailsMeetingComponent } from './details-meeting/details-meeting.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { MatDialog } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ListMeetingComponent,
    DetailsMeetingComponent,
    AddMeetingComponent,
    EditMeetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],

  providers: [MeetingService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
