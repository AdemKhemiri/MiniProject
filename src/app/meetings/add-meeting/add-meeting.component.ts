import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from 'src/app/Model/Meeting.model';
import { MeetingService } from 'src/app/Model/MeetingService.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {

  @ViewChild('id') id: ElementRef;
  @ViewChild('titre') titre:ElementRef;
  @ViewChild('lieu') lieu:ElementRef;
  @ViewChild('dateD') date_deb:ElementRef;
  @ViewChild('dateF') date_fin:ElementRef;

  meet: Meeting;
  constructor(
    private router:Router,
    private meetingService: MeetingService    
    ) { }

  ngOnInit(): void {
    
  }
  onLoadList() {
    // this.date_deb = new Date(this.date_deb);
    // this.date_fin = new Date(this.date_fin);
    console.log(this.id.nativeElement.value);
    this.meet = this.meetingService.createMeeting(
      this.id.nativeElement.value, 
      this.titre.nativeElement.value, 
      this.lieu.nativeElement.value, 
      new Date(), new Date()
    );

    this.meetingService.addMeeting(this.meet);
    this.router.navigate(['']);
  }
}
