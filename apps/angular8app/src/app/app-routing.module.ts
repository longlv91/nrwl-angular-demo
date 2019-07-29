import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/apps/dashboards/analytics', pathMatch: 'full'
  },
  {
    path: 'apps', loadChildren: () => import('./modules/application/application.module').then(mod => mod.ApplicationModule)
  },
  {
    path: 'pages', loadChildren: () => import('./modules/page/page.module').then(mod => mod.PageModule)
  },
  {
    path: 'user-interface', loadChildren: () => import('./modules/user-interface/user-interface.module').then(mod => mod.UserInterfaceModule)
  },
  { path: '**', redirectTo: '/pages/error/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }