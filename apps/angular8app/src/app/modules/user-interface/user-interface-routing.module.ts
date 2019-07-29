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
  { path: 'cards', component: CardsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'page-layouts', component: PageLayoutsComponent },
  { path: 'helper-classes', component: HelperClassesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInterfaceRoutingModule { }
