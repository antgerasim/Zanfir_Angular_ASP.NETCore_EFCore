import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get('quizId');

    this.getQuestions(quizId);
  }

  getQuestions(quizId) {
    this.api.getQuestions(quizId).subscribe(res => {
      this.questions = res;
      console.log('questions added successfully');
    });
  }

  apiSelectQuestion(question) {
    this.api.selectQuestion(question);
  }

}
