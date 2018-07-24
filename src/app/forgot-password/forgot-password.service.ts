import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }

}
