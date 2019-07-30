import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: '/apps/dashboards/analytics', pathMatch: 'full' },
  { path: 'apps', loadChildren: () => import('./modules/application/application.module').then(mod => mod.ApplicationModule), canActivate: [AuthGuardGuard] },
  { path: 'pages', loadChildren: () => import('./modules/page/page.module').then(mod => mod.PageModule) },
  { path: 'user-interface', loadChildren: () => import('./modules/user-interface/user-interface.module').then(mod => mod.UserInterfaceModule), canActivate: [AuthGuardGuard] },
  { path: 'ant-elements', loadChildren: () => import('./modules/ant-elements/ant-elements.module').then(mod => mod.AntElementsModule), canActivate: [AuthGuardGuard] },
  { path: 'docs', loadChildren: () => import('./modules/documentation/documentation.module').then(mod => mod.DocumentationModule), canActivate: [AuthGuardGuard] },
  { path: '**', redirectTo: '/pages/error/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }