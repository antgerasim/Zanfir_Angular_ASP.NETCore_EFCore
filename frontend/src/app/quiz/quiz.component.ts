import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: any = {

  };


  constructor(private api: ApiService) { }

  post(quiz) {
    this.api.postQuiz(quiz);
  }

  put(quiz) {
    this.api.putQuiz(this.quiz);
  }

  ngOnInit() {
    /*When question is clicked on, we'll be notified in the subscribe, 
then we'll take the value of that question that was clicked and set it 
to our component's question property*/
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }

}
