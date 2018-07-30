import { User } from '../User';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login/login-service.service';
import { ChangePasswordService } from '../change-password/change-password.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  
  constructor(private changeService: ChangePasswordService,private loginService:LoginServiceService,private cookieService: CookieService,private router:Router) { }

  ngOnInit() {
    
    if(this.cookieService.check("username")==false){
      this.router.navigate(["/login"]);
    }
    else{
      this.username=this.cookieService.get("username");
    }
    // console.log(this.username)
  }
  changed:string;
  password:string;
  repassword:string;
  username:string;

  setUser(user:string){
    this.username=user;
  }

  changePassword(){
    console.log("user:"+this.username)
    if(this.password==undefined || this.repassword==undefined){
      this.changed='details';
    }
    else if(this.password.trim().length==0 || this.repassword.trim().length==0 ){
      this.changed='details';
    }
    else if(this.password!=this.repassword){
      this.changed='passwordMatch';
    }
  
    else{
      var user:User;   
          this.changeService.changePassword(this.username,this.password).subscribe(res =>{
            user= res as User;
            if(user.value){
              this.changed='success';
              this.cookieService.deleteAll();
              this.router.navigate(['/login']);
            }
          });
    }
    // this.service.changePassword();
  }
}
