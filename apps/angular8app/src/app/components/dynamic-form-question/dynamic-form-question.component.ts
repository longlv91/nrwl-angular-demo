import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { QuestionBase } from '@nrwl-workspace/entities';

@Component({
  selector: 'nrwl-workspace-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  constructor() { }

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  ngOnInit() {
  }

}
