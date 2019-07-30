import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { LockScreenComponent } from './components/authentication/lock-screen/lock-screen.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { ServerErrorComponent } from './components/error/server-error/server-error.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { FaqComponent } from './components/faq/faq.component';


const routes: Routes = [
  { path: '', redirectTo: '/authentication/analytics', pathMatch: 'full' },
  {
    path: 'authentication',
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { title: "Login"} },
      { path: 'register', component: RegisterComponent, data: { title: "Register"} },
      { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: "Forgot Password"} },
      { path: 'reset-password', component: ResetPasswordComponent, data: { title: "Reset Password"} },
      { path: 'lock-screen', component: LockScreenComponent, data: { title: "Lock Screen"} }
    ]
  },
  { path: 'coming-soon', component: ComingSoonComponent, data: { title: "Coming Soon"} },
  {
    path: 'error',
    children: [
      { path: '', redirectTo: 'not-found', pathMatch: 'full' },
      { path: 'not-found', component: NotFoundComponent, data: { title: "404 - Page Not Found"} },
      { path: 'server-error', component: ServerErrorComponent, data: { title: "500 - Server Error"} }
    ]
  },
  { path: 'invoice', component: InvoiceComponent, data: { title: "Invoice"} },
  { path: 'pricing', component: PricingComponent, data: { title: "Pricing"} },
  { path: 'profile', component: ProfileComponent, data: { title: "Profile"} },
  { path: 'search', component: SearchComponent, data: { title: "Search"} },
  { path: 'faq', component: FaqComponent, data: { title: "FAQ"} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
