import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _auth: AuthService,
    private _alert: AlertService
  ) {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this._auth.login(this.loginForm.value).subscribe(
      (response) => {
        sessionStorage.setItem('user', JSON.stringify(response));
        this.goSales();
      },
      (badRequest) => {
        const message = badRequest.error?.message;
        this._alert.error(message);
      }
    );
  }

  goSales(): void {
    this.router.navigateByUrl('/sales');
  }
}
