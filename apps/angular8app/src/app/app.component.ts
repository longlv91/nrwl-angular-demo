import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TitleService } from './services/title.service';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';
import { ThemeControlService } from './services/theme-control.service';

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

  constructor(private titleService: TitleService, private authService: AuthService,
    private cookieService: CookieService, private translate: TranslateService,
    private themeService: ThemeControlService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
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

  getCurrentTheme() {
    if (this.authService.isLoggedIn) {
      return this.themeService.getCurrentTheme()
    }
    return '';
  }

}
