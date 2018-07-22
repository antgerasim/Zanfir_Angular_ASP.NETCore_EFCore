import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQuestions().subscribe(res => {
      this.questions = res;
      console.log('questions added successfully');
    });
  }

  apiSelectQuestion(question) {
    this.api.selectQuestion(question);
  }

}
