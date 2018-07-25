import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  login(data) {
    return this.http.post('http://localhost:3000/api/user/login', data)
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');

  }

  removeToken() {
    localStorage.removeItem('token');
  }


  isLoggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

}
