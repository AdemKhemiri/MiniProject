import { Component, OnInit } from '@angular/core';
import { Meeting } from '../Model/Meeting.model';
import { MeetingService } from '../Model/MeetingService.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
  providers: [MeetingService]
})
export class MeetingsComponent implements OnInit {

  selectedMeeting: Meeting;
  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.meetingService.selectedMeeting.subscribe(
      (meet: Meeting) => {
        this.selectedMeeting = meet;
      }
    );
  }
  
}
