import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @Output() hide = new EventEmitter();
  message: string;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }


  hideMe() {
    this.hide.emit();
  }

  submitForm(f) {
    console.log(f.value);
    this.dataService.createUser(f.value).subscribe(res => {
      console.log(res);
      if (res['success'] === true) {
        this.message = res['message'];
        setTimeout(() => {
          this.hideMe();
        }, 3000)
      }
    })
  }

}
