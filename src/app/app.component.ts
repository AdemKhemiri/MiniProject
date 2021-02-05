import { Component, inject, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'MiniProject';
  loadedPage = '';


  @Input() meetIndex: number;


  ngOnInit(): void {

  }


  onNavigate(page:string) {

    this.loadedPage = page;
  }

}
