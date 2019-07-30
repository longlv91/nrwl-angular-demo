import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TitleService } from './services/title.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'nrwl-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  questions: any[];

  public config: PerfectScrollbarConfigInterface = {};

  constructor(private titleService: TitleService, private authService: AuthService) {
  }

  ngOnInit() {
    this.titleService.init();
  }

  isAuthorized() {
    return this.authService.isLoggedIn;
  }
}
