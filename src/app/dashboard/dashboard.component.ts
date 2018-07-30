import { GoogleLoginService } from './../google-login/google-login.service';
import { GoogleLoginComponent } from '../google-login/google-login.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  photoUrl:string;
  constructor(private cookieService:CookieService,private router:Router,private googleLoginService:GoogleLoginService) { }

  ngOnInit() {
    if(this.cookieService.check("username")==false){
      this.router.navigate(["/login"]);
    }
    
  }
logout(){
this.cookieService.deleteAll();
this.googleLoginService.signOut();
}
}
