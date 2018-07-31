import { CookieService } from 'ngx-cookie-service';
import { LoginServiceService } from './../login/login-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private cookieService:CookieService,private loginService:LoginServiceService) { }

  ngOnInit() {
  }

  logout(){
    this.cookieService.deleteAll();
    this.loginService.signOut();
    }

    about(){
      window.scrollTo(300,300);
    }

    services(){
      window.scrollTo(0,800);
    }

    contact(){
      window.scrollTo(0,1300);
    }

}
