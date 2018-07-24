import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';
import { Injectable } from '@angular/core';

@Injectable()
export class ChangePasswordService {

  constructor(private http : HttpClient) { }
  

  changePassword(username:string,newPasword:string): Observable<any>{
    var user = {
      'username': username,
        'password': newPasword,
        'value' :false
      };
 
    return this.http.put("http://localhost:3000/change-password",user);
  }
}
