import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AES } from 'crypto-js';
import { environment } from '../../../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'nrwl-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    this.message = '';
    const postData = {
      username: this.validateForm.controls['userName'].value,
      password: AES.encrypt(this.validateForm.controls['password'].value, environment.secret_key).toString()
    }
    this.authService.login(postData)
    .pipe(
      catchError(error => {
        this.message = 'Username or password is incorrect. Please try to login again';
        return throwError(error);
      })
    )
    .subscribe(data => {
      if (data) {
        this.authService.isLoggedIn = true;
        this.authService.accessToken = data['access_token'];
        this.authService.user = data['userInfo'];
        this.cookieService.set('user', JSON.stringify(this.authService.user));
        this.cookieService.set('token', this.authService.accessToken);
        this.authService.checkToken();
        this.authService.gotoDefaultPage(this.authService.user.defaultPage);
      }
    });
  }

}
