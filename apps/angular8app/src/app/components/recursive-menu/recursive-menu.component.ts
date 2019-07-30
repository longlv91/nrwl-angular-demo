import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '@nrwl-workspace/entities';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'nrwl-workspace-recursive-menu',
  templateUrl: './recursive-menu.component.html',
  styleUrls: ['./recursive-menu.component.css']
})
export class RecursiveMenuComponent implements OnInit {

  @Input() menus: Menu[];
  @Input() isCollapsed: boolean;
  currentUrl: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.currentUrl = val.url;
      }
    })
  }

  isSelectedItem(routeLink: string) {
    if (this.currentUrl) {
      return this.currentUrl.indexOf(routeLink) !== -1;
    }
    return false;
  }

  hasSelectedChild(children: Menu[]) {
    if (this.currentUrl) {
      return !!children.find(item => this.currentUrl.indexOf(item.routerLink) !== -1);
    }
    return false;
  }

}
