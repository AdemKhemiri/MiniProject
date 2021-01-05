import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { Meeting } from '../Model/Meeting.model';
import { MeetingService } from '../Model/MeetingService.service';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit, DoCheck {

  @Output() selectedPage = new EventEmitter<string>();

  @Output() selectedMeeting = new EventEmitter<number>();

  meetings: Meeting[];
  constructor(private meetingService: MeetingService) { }

  
  ngDoCheck(): void {
    this.meetings = this.meetingService.getMeetings();
  }
  ngOnInit(): void {

    
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
  
  onEditList(index: number) {
    this.selectedMeeting.emit(index);
  }
}
