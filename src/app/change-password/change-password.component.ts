import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../User';
import { LoginServiceService } from '../login/login-service.service';
import { ChangePasswordService } from './change-password.service';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private changeService: ChangePasswordService,private loginService:LoginServiceService,private cookieService: CookieService,private router:Router) { }

  ngOnInit() {
    this.username=this.cookieService.get("username");
    // console.log(this.username)
  }
  changed:string;
  oldpassword:string;
  password:string;
  repassword:string;
  username:string;

  setUser(user:string){
    this.username=user;
  }

  changePassword(){
    console.log("user:"+this.username)
    if(this.password==undefined || this.repassword==undefined || this.oldpassword==undefined){
      this.changed='details';
    }
    else if(this.password.trim().length==0 || this.repassword.trim().length==0 || this.oldpassword.trim().length==0){
      this.changed='details';
    }
    else if(this.password!=this.repassword){
      this.changed='passwordMatch';
    }
    else if(this.password===this.oldpassword){
      this.changed='sameAsOld';
    }
    else{
      var temp:boolean;
      var userExist:User;
      this.loginService.validateLongin(this.username,this.oldpassword).subscribe(users => {
        userExist = users as User;
        if(userExist.value){  
          var user:User;   
          this.changeService.changePassword(this.username,this.password).subscribe(res =>{
            user= res as User;
            if(user.value){
              this.changed='success';
              this.router.navigate(['/dashboard']);
            }
          });
        }
        else
        this.changed='oldNotMatch';
    });
    }


    // this.service.changePassword();
  }
}
