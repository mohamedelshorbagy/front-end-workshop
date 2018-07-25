import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3000/api/user/all');
  }

  createUser(data) {
    return this.http.post('http://localhost:3000/api/user/create', data);
  }


}
