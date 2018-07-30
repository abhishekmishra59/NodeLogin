import { GoogleLoginService } from './google-login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FacebookLoginProvider } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService } from 'angular4-social-login';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
 
  constructor(private authService: AuthService,private router:Router,private cookieService:CookieService,private googleLoginService:GoogleLoginService) { }
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      // alert(this.googleLoginService)
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        alert(this.user.id)
        alert(this.user.authToken)
        alert(this.user.provider)
        this.cookieService.set("username",this.user.name);
        this.router.navigate(['/dashboard']);
      }
    });
  }
 
  signInWithGoogle(): void {
    this.googleLoginService.signInWithGoogle();
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    alert("out");
    this.authService.signOut();
  }

}
