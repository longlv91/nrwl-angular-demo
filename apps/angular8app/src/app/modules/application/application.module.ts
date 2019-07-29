import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProductsComponent } from './components/e-commerce/products/products.component';
import { ProductDetailComponent } from './components/e-commerce/product-detail/product-detail.component';
import { OrdersComponent } from './components/e-commerce/orders/orders.component';
import { OrderDetailComponent } from './components/e-commerce/order-detail/order-detail.component';


@NgModule({
  declarations: [DashboardsComponent, CalendarComponent, ProductsComponent, ProductDetailComponent, OrdersComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
