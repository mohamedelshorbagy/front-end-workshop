import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Credit - Home');
  }

}
