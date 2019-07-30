import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecursiveMenuComponent } from './components/recursive-menu/recursive-menu.component';
import { TitleService } from './services/title.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DataService } from './services/data.service';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthService } from './services/auth.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

@NgModule({
  declarations: [AppComponent, NavigationComponent, RecursiveMenuComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, NgZorroAntdModule, NzDividerModule,
    PerfectScrollbarModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    TitleService,
    AuthService,
    AuthGuardGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
