import { LoginServiceService } from './../login/login-service.service';
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
  constructor(private cookieService:CookieService,private router:Router,private loginService:LoginServiceService) { }

  ngOnInit() {
    if(this.cookieService.check("username")==false){
      this.router.navigate(["/login"]);
    }
  }
logout(){
this.cookieService.deleteAll();
this.loginService.signOut();
}
}
