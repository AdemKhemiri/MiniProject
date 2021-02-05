import { Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Meeting } from '../Model/Meeting.model';
import { MeetingService } from '../Model/MeetingService.service';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit, DoCheck {

  @ViewChild('id') id: ElementRef;                    ////////////////////////////////////
  @ViewChild('titre') titre:ElementRef;               //                                //
  @ViewChild('lieu') lieu:ElementRef;                 //  Link the ref to the variable  //
  @ViewChild('dateD') date_deb:ElementRef;            //                                //
  @ViewChild('dateF') date_fin:ElementRef;            ////////////////////////////////////

  @Input() meetToEdit: Meeting;

  @Input() meetingIndex: number;
  newMeet: Meeting;


  dateDeb : Date;
  dateFin : string;
  constructor(private meetingService: MeetingService) {

   }
  ngDoCheck() {
    this.meetToEdit = this.meetingService.getMeeting(this.meetingIndex);


  }
  ngOnInit(): void {


  }

  onEditList() {
    this.newMeet = new Meeting(
      this.id.nativeElement.value,
      this.titre.nativeElement.value,
      this.lieu.nativeElement.value,
      new Date(this.date_deb.nativeElement.value),
      new Date(this.date_fin.nativeElement.value)
    );
    this.meetingService.editMeeting(this.meetingIndex, this.newMeet);

  }

}
