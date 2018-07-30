import { GoogleLoginService } from './../google-login/google-login.service';
import { User } from '../User';
import { LoginServiceService } from './login-service.service';

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service :LoginServiceService,private router:Router,private cookieService: CookieService,private googleLoginService:GoogleLoginService) {
    
   }

  ngOnInit() {
    
  }
  username:string;
  password:string;
  userExist:User;
  isloading :boolean;
  loggedIn:string;
  login(){
    this.isloading = true;
    this.service.validateLongin(this.username,this.password)
    .subscribe(users => {
      this.isloading = false;
      this.userExist = users as User;
      if(this.userExist.value){
      this.loggedIn="success";
      this.cookieService.set("username",this.username);
      this.router.navigate(['/dashboard']);
      }
      else
      this.loggedIn="failure";
  });
  }
  loginWithGoogle(){
    this.googleLoginService.signInWithGoogle();
  }
}
