import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ApiService } from './api.service';


import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'quizzes', component: QuizzesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
