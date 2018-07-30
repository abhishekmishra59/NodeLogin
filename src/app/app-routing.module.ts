import { GoogleLoginComponent } from './google-login/google-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { DbComponent } from './db/db.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   { path: '', redirectTo:'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent},
  { path: 'db', component: DbComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard',component:DashboardComponent},
  { path: 'change-password',component:ChangePasswordComponent},
  { path: 'forgot',component:ForgotPasswordComponent},
  { path: 'reset',component:ResetPasswordComponent},
  { path: 'googleLog',component:GoogleLoginComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
