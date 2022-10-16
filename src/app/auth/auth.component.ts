import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  @ViewChild('authForm') authForm: NgForm;
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authSR: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }
    const { email, password } = this.authForm.value;
    this.isLoading = true;
    if (this.isLoginMode) {
    } else {
      this.authSR.signUp(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (errRes) => {
          this.error = errRes.error.error.message;
          this.isLoading = false;
        }
      );
    }
    this.authForm.reset();
  }
}
