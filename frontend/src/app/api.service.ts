import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private port1 = 54941;
  private port2 = 55981;
  /*Observable subject Cross component communication */
  private selectedQuestion = new Subject<any>();
  questionsSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();


  constructor(private http: HttpClient) { }

  /* QUESTIONS */
  getQuestions(quizId) {
    // return observable instead of object so we can subscribe to it
    return this.http.get(`http://localhost:${this.port1}/api/questions/${quizId}`);
  }


  postQuestion(question) {
    this.http.post(`http://localhost:${this.port1}/api/questions`, question).subscribe(res => {
      console.log(res);
    });
  }

  putQuestion(question) {
    this.http.put(`http://localhost:${this.port1}/api/questions/${question.id}`, question).subscribe(res => {
      console.log(res);
    });
  }

  selectQuestion(question) {
    //debugger;
    this.selectedQuestion.next(question);
  }

  /* END QUESTIONS */

  /* QUIZZES */

  getQuizzes() {
    // return observable instead of object so we can subscribe to it
    return this.http.get(`http://localhost:${this.port1}/api/quizzes`);
  }

  getAllQuizzes() {
    // return observable instead of object so we can subscribe to it
    return this.http.get(`http://localhost:${this.port1}/api/quizzes/all`);
  }

  postQuiz(quiz) {
    //debugger;
    this.http.post(`http://localhost:${this.port1}/api/quizzes`, quiz).subscribe(res => {
      console.log(res);
    });
  }

  putQuiz(quiz) {
    this.http.put(`http://localhost:${this.port1}/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
      console.log(res);
    });
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }

  /* END QUIZZES */



}
