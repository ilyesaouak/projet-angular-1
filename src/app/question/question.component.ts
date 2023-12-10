import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  likeAngular: boolean = false;
  dislikeAngular: boolean = false;

  constructor() {}
}
