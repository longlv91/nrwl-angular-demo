import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { FormsComponent } from './components/forms/forms.component';
import { ColorsComponent } from './components/colors/colors.component';
import { IconsComponent } from './components/icons/icons.component';
import { PageLayoutsComponent } from './components/page-layouts/page-layouts.component';
import { HelperClassesComponent } from './components/helper-classes/helper-classes.component';


const routes: Routes = [
  { path: '', redirectTo: '/cards', pathMatch: 'full' },
  { path: 'cards', component: CardsComponent, data: { title: "Cards"} },
  { path: 'forms', component: FormsComponent, data: { title: "Forms"} },
  { path: 'colors', component: ColorsComponent, data: { title: "Colors"} },
  { path: 'icons', component: IconsComponent, data: { title: "Icons"} },
  { path: 'page-layouts', component: PageLayoutsComponent, data: { title: "Page Layouts"} },
  { path: 'helper-classes', component: HelperClassesComponent, data: { title: "Helper Classes"} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInterfaceRoutingModule { }
