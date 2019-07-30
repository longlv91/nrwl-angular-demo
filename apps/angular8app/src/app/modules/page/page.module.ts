import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SearchComponent } from './components/search/search.component';
import { FaqComponent } from './components/faq/faq.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { ServerErrorComponent } from './components/error/server-error/server-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [ComingSoonComponent, ProfileComponent, PricingComponent, SearchComponent, FaqComponent, InvoiceComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent, LockScreenComponent, NotFoundComponent, ServerErrorComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, NgZorroAntdModule,
    PageRoutingModule
  ]
})
export class PageModule { }
