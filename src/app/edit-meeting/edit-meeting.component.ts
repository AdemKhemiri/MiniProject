import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  @Input() meetToEdit: Meeting;
  newMeet: Meeting;


  dateDeb : string;
  dateFin : string;
  constructor(private meetingService: MeetingService) {
    
   }

  ngOnInit(): void {
    // this.meetingService.selectedMeeting.subscribe(
    //   (meet:Meeting) => {this.meet = meet;}
    // );

    

  }
  
  onEditList() {

    this.meetToEdit.id = this.id.nativeElement.value;
    this.meetToEdit.titre = this.titre.nativeElement.value; 
    this.meetToEdit.lieu = this.lieu.nativeElement.value;
    this.meetToEdit.date_deb = new Date(this.date_deb.nativeElement.value);
    this.meetToEdit.date_fin = new Date(this.date_fin.nativeElement.value);
    

  }
  
}
