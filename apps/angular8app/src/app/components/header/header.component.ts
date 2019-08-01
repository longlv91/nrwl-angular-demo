import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nrwl-workspace-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isCollapsed: boolean;
  constructor(private authService: AuthService, private translate: TranslateService) { }

  ngOnInit() {
  }

  isAuthorized() {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.clearSession();
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

  switchLanguage(langCode: string) {
    this.translate.use(langCode);
  }

  isCurrentLanguage(langCode: string) {
    return this.translate.currentLang === langCode;
  }

}
