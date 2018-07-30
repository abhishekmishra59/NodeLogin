import { AuthService, SocialUser, FacebookLoginProvider, GoogleLoginProvider } from 'angular4-social-login';
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

  constructor(private service :LoginServiceService,private router:Router,private cookieService: CookieService,private authService: AuthService) {
    
   }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      // alert(this.googleLoginService)
      this.user = user;
      this.loggedInGoogle = (user != null);
      if(this.loggedInGoogle){
        this.cookieService.set("username",this.user.name);
        this.router.navigate(['/dashboard']);
      }
    });
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
  


  private user: SocialUser;
  private loggedInGoogle: boolean;
 
 
  
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.service.signOut();
  }
}
