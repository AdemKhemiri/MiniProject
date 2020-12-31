import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meeting } from '../Model/Meeting.model';
import { MeetingService } from '../Model/MeetingService.service';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit {

  @ViewChild('id') id: ElementRef;
  @ViewChild('titre') titre:ElementRef;
  @ViewChild('lieu') lieu:ElementRef;
  @ViewChild('dateD') date_deb:ElementRef;
  @ViewChild('dateF') date_fin:ElementRef;

  meet: Meeting;
  newMeet: Meeting;

  constructor(private meetingService: MeetingService) {
    
   }

  ngOnInit(): void {
    
    this.meetingService.selectedMeeting.subscribe(
      (meet:Meeting) => {this.meet = meet;}
    );
  }
  
  onEditList() {
    this.newMeet = this.meetingService.createMeeting(
      this.id.nativeElement.value, 
      this.titre.nativeElement.value, 
      this.lieu.nativeElement.value, 
      new Date(), new Date()
    );
    this.meetingService.addMeeting(this.newMeet);
  }
  
}
