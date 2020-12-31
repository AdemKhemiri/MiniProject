import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiniProject';
  loadedPage = '';
  interval:any;

  ngOnInit(): void {
  }
  
  onNavigate(page:string) {
    
    this.loadedPage = page;
  }
}
