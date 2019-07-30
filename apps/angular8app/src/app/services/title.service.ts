import { Injectable, EventEmitter } from '@angular/core';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';

const APP_TITLE = 'VBL | ';
const SEPARATOR = ' > ';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  breadcrumbEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) { }

  init() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
      map((data) => {
        this.breadcrumbEvent.emit(this.loadBreadcrumb(this.router.url));
        if (data.title) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data.title;
        } else {
          // If not, we do a little magic on the url to create an approximation
          return this.router.url.split('/').reduce((acc, frag) => {
            if (acc && frag) { acc += SEPARATOR; }
            return acc + this.ucFirst(frag);
          });
        }
      })
    ).subscribe((pathString) => this.titleService.setTitle(`${APP_TITLE} ${pathString}`));
  }

  loadBreadcrumb(url: string) {
    return url.split('/').filter(item => item !== "").map(str => this.ucFirst(str.replace("-"," ")));
  }

  ucFirst(string) {
    if (!string) { return string; }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
