import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AES } from 'crypto-js';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'nrwl-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    const postData = {
      username: this.validateForm.controls['userName'].value,
      password: AES.encrypt(this.validateForm.controls['password'].value, environment.secret_key).toString()
    }
    this.authService.login(postData);
  }

}
