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

  put(question){
    this.api.putQuestion(question);
  }

  ngOnInit() {
    /*When question is clicked on, we'll be notified in the subscribe, 
    then we'll take the value of that question that was clicked and set it 
    to our component's question property*/
    this.api.questionsSelected.subscribe(question => this.question = question);
  }

}
