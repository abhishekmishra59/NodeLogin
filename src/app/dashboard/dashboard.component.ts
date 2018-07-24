import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cookieService:CookieService,private router:Router) { }

  ngOnInit() {
    if(this.cookieService.check("username")==false){
      this.router.navigate(["/login"]);
    }
  }
logout(){
this.cookieService.deleteAll();
}
}
