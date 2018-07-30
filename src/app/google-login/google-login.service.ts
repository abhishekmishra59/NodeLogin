import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
import { Injectable } from '@angular/core';

@Injectable()
export class GoogleLoginService {

  constructor(private authService: AuthService) { }
  signInWithGoogle(): void {
    alert(this.authService)
     this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    alert("out");
    this.authService.signOut();
  }
}
