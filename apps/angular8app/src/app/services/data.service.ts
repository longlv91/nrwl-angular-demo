import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menus } from '@nrwl-workspace/entities';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BACKEND_API = environment.backend_api.uri;

  constructor(private httpClient: HttpClient) { }

  getMenus(userId: string): Observable<Menus[]> {
    const query = `?userId=${userId}`;
    return this.httpClient.get<Menus[]>(this.BACKEND_API + environment.backend_api.menu_context + query);
  }

  getAnalyticsData(): Observable<Menus[]> {
    return this.httpClient.get<Menus[]>(this.BACKEND_API + environment.backend_api.analytics_context);
  }
}
