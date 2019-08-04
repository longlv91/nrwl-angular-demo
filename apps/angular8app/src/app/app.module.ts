import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  PerfectScrollbarModule, PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecursiveMenuComponent } from './components/recursive-menu/recursive-menu.component';
import { TitleService } from './services/title.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { DataService } from './services/data.service';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { RightSettingsComponent } from './components/right-settings/right-settings.component';
import { ThemeControlService } from './services/theme-control.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

@NgModule({
  declarations: [AppComponent, NavigationComponent, RecursiveMenuComponent, HeaderComponent, RightSettingsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, SharedModule,
    PerfectScrollbarModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
  providers: [
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
    CookieService,
    AuthService,
    AuthGuardGuard,
    ThemeControlService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
