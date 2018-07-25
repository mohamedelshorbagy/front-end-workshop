import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  name: string = '';
  message: string = '';
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  addUser(form) {
    console.log(form);
    console.log(form.value);
    // this.usersService.addUser(form.value);
    // console.log(this.usersService.getUsers());
  }

}
