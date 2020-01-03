import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  setUser(){
    return 123;
    // return this.http.get('http://192.168.100.34:3000/api/getUser',
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': 'http://localhost:4200',
    //       "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    //       "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    //       "Access-Control-Max-Age": "3600"
    //     }
    //   });
  }
}
