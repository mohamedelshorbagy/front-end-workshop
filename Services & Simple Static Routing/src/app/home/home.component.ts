import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    console.log('Load Users ...');
    this.dataService.getUsers().subscribe(res => {
      this.users = res['users'];
    })
  }

}
