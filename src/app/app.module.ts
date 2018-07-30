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
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CookieService } from 'ngx-cookie-service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordService } from './reset-password/reset-password.service';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';




let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("860967617425-icf05td2metfl80ftscijem50nlbiss0.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("472200086586196")
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    TopnavComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    ,SocialLoginModule.initialize(config)
  ],
  providers: [LoginServiceService,SignupService,ChangePasswordService,CookieService,ForgotPasswordService,ResetPasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
