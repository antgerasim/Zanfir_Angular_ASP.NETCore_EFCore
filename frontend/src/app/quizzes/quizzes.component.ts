import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQuizzes().subscribe(res => {
      this.quizzes = res;
      console.log('quizzes added successfully');
    });
  }

  apiSelectQuiz(quiz) {
    this.api.selectQuiz(quiz);
  }

}
