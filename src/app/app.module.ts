import { ForgotPasswordService } from './forgot-password/forgot-password.service';
import { ChangePasswordService } from './change-password/change-password.service';
import { SignupService } from './signup/signup.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginServiceService } from './login/login-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DbComponent } from './db/db.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CookieService } from 'ngx-cookie-service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordService } from './reset-password/reset-password.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DbComponent,
    SignupComponent,
    DashboardComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginServiceService,SignupService,ChangePasswordService,CookieService,ForgotPasswordService,ResetPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
