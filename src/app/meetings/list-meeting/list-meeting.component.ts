import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from '../../Model/Meeting.model';
import { MeetingService } from '../../Model/MeetingService.service';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {

  meetings: Meeting[];
  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.meetings = this.meetingService.getMeetings();
    
    this.meetingService.addedMeeting
      .subscribe(
        (meets: Meeting[]) => {
          this.meetings = meets;
        }
    );
  }
  onShowDetails(i:number) {
    this.meetingService.selectedMeeting.emit(
      this.meetingService.getMeeting(i)
      );
  }
  onDeleteMeeting(i: number) {
    this.meetingService.deleteMeeting(i);
  }
}
