import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from '@nrwl-workspace/entities';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;
  accessToken: string;
  user: UserDTO

  private BACKEND_API = environment.backend_api.uri;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(postData: any) {
    this.httpClient.post(this.BACKEND_API + environment.backend_api.login_context, postData).subscribe(data => {
      if (data) {
        this.isLoggedIn = true;
        this.accessToken = data['access_token'];
        this.user = data['userInfo'];
        this.router.navigate(["/apps/dashboards/analytics"]);
      }
    });
  }

  clearSession() {
    this.accessToken = "";
    this.isLoggedIn = false;
    this.user = null;
    this.router.navigate(["/pages/authentication/login"]);
  }
}
