import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: any = {
  
  };

  constructor(private api: ApiService) { }

  post(question) {
    this.api.postQuestion(question);
  }

  ngOnInit() {
  }

}
