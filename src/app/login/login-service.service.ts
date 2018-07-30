import { AuthService } from 'angular4-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class LoginServiceService {

  constructor(private http : HttpClient,private authService: AuthService) { }
  
  validateLongin(username:string,password: string): Observable<any>{
    return this.http.get("http://localhost:3000/login/"+username+"/"+password);
  }

  signOut(){
    this.authService.signOut();
  }
}
