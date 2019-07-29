import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'nrwl-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'angular8app';
  isCollapsed = false;
  questions: any[];

  public config: PerfectScrollbarConfigInterface = {};

  constructor() {
    
  }
}
