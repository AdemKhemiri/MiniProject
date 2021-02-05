import { Component, DoCheck, OnInit } from '@angular/core';
import { Meeting } from '../Model/Meeting.model';
import { MeetingService } from '../Model/MeetingService.service';

@Component({
  selector: 'app-details-meeting',
  templateUrl: './details-meeting.component.html',
  styleUrls: ['./details-meeting.component.css']
})
export class DetailsMeetingComponent implements OnInit, DoCheck {

  selectedMeeting: Meeting;
  constructor(private meetingService: MeetingService) { }

  ngDoCheck(): void {
    // try {

    //   );
    // }
    // catch{ throw new Error('Method not implemented.'); }

  }

  ngOnInit(): void {
    this.meetingService.selectedMeeting.subscribe(
      (meet: Meeting) => {
        this.selectedMeeting = meet;
      }
    );
  }

}
