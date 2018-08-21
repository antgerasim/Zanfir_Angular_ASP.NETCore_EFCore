import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: any = {  
  };
  quizId;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  post(question) {
    question.quizId = this.quizId;
    this.api.postQuestion(question);
  }

  put(question){
    this.api.putQuestion(question);
  }

  ngOnInit() {
    /*When question is clicked on, we'll be notified in the subscribe, 
    then we'll take the value of that question that was clicked and set it 
    to our component's question property*/
    this.quizId = this.route.snapshot.paramMap.get('quizId');    
    this.api.questionsSelected.subscribe(question => this.question = question);
  
    //console.log(quizId);

  }

}
