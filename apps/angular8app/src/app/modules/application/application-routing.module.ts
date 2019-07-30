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
      { path: 'analytics', component: AnalyticsComponent, data: { title: "Analytics Dashboard"} },
      { path: 'project', component: ProjectComponent, data: { title: "Project Dashboard"} }
    ]
  },
  { path: 'calendar', component: CalendarComponent, data: { title: "Calendar"} },
  {
    path: 'ecommerce',
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent, data: { title: "Products"} },
      { path: 'product-detail', component: ProductDetailComponent, data: { title: "Product Detail"} },
      { path: 'orders', component: OrdersComponent, data: { title: "Orders"} },
      { path: 'order-detail', component: OrderDetailComponent, data: { title: "Order Detail"} }
    ]
  },
  { path: 'academy', component: AcademyComponent, data: { title: "Academy"} },
  { path: 'mail', component: MailComponent, data: { title: "Mail"} },
  { path: 'chat', component: ChatComponent, data: { title: "Chat"} },
  { path: 'file-manager', component: FileManagerComponent, data: { title: "File Manager"} },
  { path: 'contact', component: ContactComponent, data: { title: "Contact"} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
