import { Component } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'nrwl-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'angular8app';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
