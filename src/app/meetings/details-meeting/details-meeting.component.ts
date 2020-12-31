import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from 'src/app/Model/Meeting.model';


@Component({
  selector: 'app-details-meeting',
  templateUrl: './details-meeting.component.html',
  styleUrls: ['./details-meeting.component.css']
})
export class DetailsMeetingComponent implements OnInit {

  @Input() meetingDetail: Meeting;
  constructor() { }

  ngOnInit(): void {
    
  }

}
