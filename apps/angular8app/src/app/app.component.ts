import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TitleService } from './services/title.service';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'nrwl-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  questions: any[];
  breadcrumbs: string[];

  public config: PerfectScrollbarConfigInterface = {};

  constructor(private titleService: TitleService, private authService: AuthService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.titleService.init();
    this.titleService.breadcrumbEvent.subscribe(event => {
      this.breadcrumbs = event;
    });
    if (this.cookieService.check('user')) {
      this.authService.isLoggedIn = true;
      this.authService.user = JSON.parse(this.cookieService.get('user'));
    }

    if (this.cookieService.check('token')) {
      this.authService.accessToken = this.cookieService.get('token');
      this.authService.checkToken();
    }
  }

  isAuthorized() {
    return this.authService.isLoggedIn;
  }

  showUserText(fulltext: boolean) {
    if (this.authService.isLoggedIn) {
      if (fulltext) {
        return this.authService.user.username;
      }
      return this.authService.user.username.substring(0, 2).toUpperCase();
    }
    return "?";
  }

  showUserAvatar() {
    if (this.authService.isLoggedIn && this.authService.user.avatar && 
      this.authService.user.avatar !== "") {
      return this.authService.user.avatar;
    }
    return "";
  }

  logout() {
    this.authService.clearSession();
  }
}
