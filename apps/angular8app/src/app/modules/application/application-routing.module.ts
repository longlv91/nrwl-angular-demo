import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AnalyticsComponent } from './components/dashboards/analytics/analytics.component';
import { ProjectComponent } from './components/dashboards/project/project.component';
import { AcademyComponent } from './components/academy/academy.component';
import { MailComponent } from './components/mail/mail.component';
import { ChatComponent } from './components/chat/chat.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/e-commerce/products/products.component';
import { ProductDetailComponent } from './components/e-commerce/product-detail/product-detail.component';
import { OrdersComponent } from './components/e-commerce/orders/orders.component';
import { OrderDetailComponent } from './components/e-commerce/order-detail/order-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboards/analytics', pathMatch: 'full' },
  {
    path: 'dashboards',
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'project', component: ProjectComponent }
    ]
  },
  { path: 'calendar', component: CalendarComponent },
  {
    path: 'ecommerce',
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'order-detail', component: OrderDetailComponent }
    ]
  },
  { path: 'academy', component: AcademyComponent },
  { path: 'mail', component: MailComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'file-manager', component: FileManagerComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
