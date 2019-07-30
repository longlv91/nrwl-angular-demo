import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangelogComponent } from './components/changelog/changelog.component';


const routes: Routes = [
  { path: '', redirectTo: '/changelog', pathMatch: 'full' },
  { path: 'changelog', component: ChangelogComponent, data: { title: "Changelog"} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
