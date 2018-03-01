import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OwnQuestionsService} from '../core/own-questions.service';
import {OwnPlayersService} from '../core/own-players.service';
import {Category, Question} from '../models/questions.model';


@Component({
  selector: 'own-own-question',
  templateUrl: './own-question.component.html',
  styleUrls: ['./own-question.component.scss']
})
export class OwnQuestionComponent implements OnInit {
  category: Category;
  question: Question;

  constructor(
    private route: ActivatedRoute,
    private ownQuestionsService: OwnQuestionsService,
    private onwPlayersService: OwnPlayersService
  ) { }

  ngOnInit() {
    this.ownQuestionsService.loadCategories().subscribe(categories => {
      this.category = categories[this.route.snapshot.params['categoryId']];
      this.question = this.category.questions[this.route.snapshot.params['questionId']];
      this.question.disabled = true;
      this.onwPlayersService.currentAmount = this.question.price;
      // TEST STUBS
      // this.question.video = 'http://techslides.com/demos/sample-videos/small.mp4';
      // this.question.audio = 'http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3';
    });
  }
}
