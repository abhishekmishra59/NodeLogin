import { User } from '../User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class SignupService {
  
  constructor(private http : HttpClient) { }
  
  signup(username:string,password: string,mobile:number): Observable<any>{
    // var body={"username":username,"password":password};
    // alert(body);
    var user: User = {
      'username': username,
        'password': password,
        'mobile':mobile,
        'value' :false
      };
 
    return this.http.post("http://localhost:3000/signup",user);
  }
}
