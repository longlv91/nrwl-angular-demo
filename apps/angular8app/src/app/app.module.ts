import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
