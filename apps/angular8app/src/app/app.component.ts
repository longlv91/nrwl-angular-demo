import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TitleService } from './services/title.service';

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

  constructor(private titleService: TitleService) {
  }

  ngOnInit() {
    this.titleService.init();
  }
}
