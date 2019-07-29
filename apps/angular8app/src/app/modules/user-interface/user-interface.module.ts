import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterfaceRoutingModule } from './user-interface-routing.module';
import { HelperClassesComponent } from './components/helper-classes/helper-classes.component';
import { PageLayoutsComponent } from './components/page-layouts/page-layouts.component';
import { ColorsComponent } from './components/colors/colors.component';
import { IconsComponent } from './components/icons/icons.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [HelperClassesComponent, PageLayoutsComponent, ColorsComponent, IconsComponent, FormsComponent, CardsComponent],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule
  ]
})
export class UserInterfaceModule { }
