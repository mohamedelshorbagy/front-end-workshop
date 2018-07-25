import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @Output() hide = new EventEmitter();
  message: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
    this.title.setTitle('Credit - Login');

  }



  submitForm(f) {
    this.authService.login(f.value).subscribe(res => {
      if (res['success'] === true) {
        // Save Into Localstorage

        this.authService.setToken(res['user']['_id']);
        this.message = res['message'];
        // Redirect to HomePage
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 3000)
      } else {
        // Error
        this.message = res['message'];
      }
    })
  }

}
