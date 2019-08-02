import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDTO, Menu } from '@nrwl-workspace/entities';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;
  accessToken: string;
  user: UserDTO;
  verifyTokenSub: Subscription;
  defaultPage: string;
  menus: Menu[] = [];

  private BACKEND_API = environment.backend_api.uri;

  constructor(private httpClient: HttpClient, private router: Router, private cookieService: CookieService) { }

  login(postData: any) {
    this.httpClient.post(this.BACKEND_API + environment.backend_api.login_context, postData).subscribe(data => {
      if (data) {
        this.isLoggedIn = true;
        this.accessToken = data['access_token'];
        this.user = data['userInfo'];
        this.cookieService.set('user', JSON.stringify(this.user));
        this.cookieService.set('token', this.accessToken);
        this.checkToken();
      }
    });
  }

  checkToken() {
    const queryServer = interval(60000);
    this.verifyTokenSub = queryServer.subscribe(time => {
      this.httpClient.get(this.BACKEND_API + environment.backend_api.verify_token).subscribe(data => {
        console.log(data['message']);
      })
    })
  }

  clearSession() {
    this.accessToken = "";
    this.isLoggedIn = false;
    this.user = null;
    this.defaultPage = undefined;
    this.cookieService.delete('user');
    this.cookieService.delete('token');
    if (this.verifyTokenSub) {
      this.verifyTokenSub.unsubscribe();
    }
    this.router.navigate(["/pages/authentication/login"]);
  }

  gotoDefaultPage() {
    this.router.navigate([this.findDefaultPage(this.menus)]);
  }

  findDefaultPage(menus: Menu[]) {
    if (this.defaultPage === undefined) {
      for (let i = 0; i < menus.length; i++) {
        if (!menus[i].hasChild) {
          this.defaultPage = '/' + menus[i].routerLink;
          break;
        } else {
          this.findDefaultPage(menus[i].children);
        }
      }
    }
    return this.defaultPage;
  }

  
}
