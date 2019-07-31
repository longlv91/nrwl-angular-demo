import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';

import { ApplicationRoutingModule } from './application-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProductsComponent } from './components/e-commerce/products/products.component';
import { ProductDetailComponent } from './components/e-commerce/product-detail/product-detail.component';
import { OrdersComponent } from './components/e-commerce/orders/orders.component';
import { OrderDetailComponent } from './components/e-commerce/order-detail/order-detail.component';
import { AnalyticsComponent } from './components/dashboards/analytics/analytics.component';
import { ProjectComponent } from './components/dashboards/project/project.component';
import { AcademyComponent } from './components/academy/academy.component';
import { MailComponent } from './components/mail/mail.component';
import { ChatComponent } from './components/chat/chat.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [CalendarComponent, ProductsComponent, ProductDetailComponent, OrdersComponent, OrderDetailComponent, AnalyticsComponent, ProjectComponent, AcademyComponent, MailComponent, ChatComponent, FileManagerComponent, ContactComponent],
  imports: [
    CommonModule,
    ChartsModule,
    NgxEchartsModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
