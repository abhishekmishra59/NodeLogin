import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: SignupService,private router:Router) { }

  ngOnInit() {
  }
  username:string;
  password:string;
  repassword:string;
  createuser:string;
  mobile:number;
  user:User;
  signup(){
    
    if(this.password==undefined || this.repassword==undefined || this.username==undefined || this.mobile==undefined){
      this.createuser="details";
    }
    else if(this.password.trim().length==0 || this.repassword.trim().length==0 || this.username.trim().length==0 || this.mobile.toString().trim().length!=10){
      this.createuser="details";
    }
    else if(this.password!=this.repassword){
      this.createuser="passwordMatch";
    }
    else{
      this.service.signup(this.username,this.password,this.mobile).subscribe(
        res => {
          this.user = res as User;
          if(this.user.value){
          this.createuser="created";
          this.router.navigate(['/login'])
          }
          else
          this.createuser="alreadyExist";
          console.log(this.createuser);
        }
      );
    }
  }
}
