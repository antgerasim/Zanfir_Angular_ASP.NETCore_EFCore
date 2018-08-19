import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  quizzes;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllQuizzes().subscribe(res => {
      this.quizzes = res;
      console.log('quizzes added successfully');
    });
  }

}
