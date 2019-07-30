import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { ChangelogComponent } from './components/changelog/changelog.component';


@NgModule({
  declarations: [ChangelogComponent],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
