import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from './Model/Meeting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiniProject';
  loadedPage = '';
  interval:any;

  @Input() meet: Meeting;
  ngOnInit(): void {
    
  }
  
  onNavigate(page:string) {
    
    this.loadedPage = page;
  }
  
}
