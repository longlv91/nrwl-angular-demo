import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { CalendarComponent } from './components/calendar/calendar.component';


const routes: Routes = [
  {
    path: 'dashboards',
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
      {
        path: 'analytics', component: DashboardsComponent
      },
      {
        path: 'project', component: DashboardsComponent
      }
    ]
    
  },
  { path: '*',
    redirectTo: '/dashboards/analytics',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
