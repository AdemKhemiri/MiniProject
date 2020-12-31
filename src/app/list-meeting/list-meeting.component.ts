import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Meeting } from '../Model/Meeting.model';
import { MeetingService } from '../Model/MeetingService.service';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {


  meetings: Meeting[];
  constructor(private meetingService: MeetingService) { }

  @Output() selectedPage = new EventEmitter<string>();

  ngOnInit(): void {

    this.meetings = this.meetingService.getMeetings();
  }
  onShowDetails(i:number) {

    this.meetingService.selectedMeeting.emit(
      this.meetingService.getMeeting(i)
      );
  }
  onDeleteMeeting(i: number) {
    this.meetingService.deleteMeeting(i);
  }
  onLoadPage(page: string) {
    this.selectedPage.emit(page);
    
  }
  onEditList(i: number) {
    
  }
}
