import { CookieService } from 'ngx-cookie-service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { generate } from 'rxjs/observable/generate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private cookieService:CookieService) { }
  showButton:boolean=true;
  otpSent:string;
  username:string;
  mobile:number;
  otpUser:number;
  otptype:string="sms";
  static otp:number;
  Invalidotp:boolean
  ngOnInit() {
    
  }
forgot(){
  var body={
    "username":this.username,
    "mobile":this.mobile
  }
  console.log(body);
this.http.post("http://localhost:3000/forgot",body).subscribe(res => {
  var user:User;
  user=res as User;
  console.log(user.value)
  if(user.value){
    var url;
    var min=1000;
    var max=9999;
    ForgotPasswordComponent.otp=Math.floor(Math.random() * (max - min + 1)) + min;
    if(this.otptype=="sms")
    url="https://2factor.in/API/V1/2f57b21e-8f00-11e8-a895-0200cd936042/SMS/"
    else if(this.otptype=="voice")
    url="https://2factor.in/API/V1/2f57b21e-8f00-11e8-a895-0200cd936042/VOICE/";
    this.http.get(url+this.mobile+"/"+ForgotPasswordComponent.otp).subscribe(res =>{
     });
    this.otpSent="success"; 
    this.showButton=false;
  }
  else
  this.otpSent="failure";
});


}


resetPassword(){
  console.log(ForgotPasswordComponent.otp);
if(this.otpUser==ForgotPasswordComponent.otp){
this.router.navigate(['/reset']);
this.cookieService.set("username",this.username);
}
else{
  this.Invalidotp=true;
}
}
}
