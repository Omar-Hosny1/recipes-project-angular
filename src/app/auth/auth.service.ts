import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

// interface AuthResponseData {
//   kind: string;
//   idToken: string;
//   email: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
// }

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXToN2w5u0TWfrcZNIYj5JM6rmQamZQ30',
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
}
