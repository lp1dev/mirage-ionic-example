import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Game, Question } from 'mirage';
import gameData from '../../gameData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  game: Game;
  currentQuestion: Question

  constructor() {
    const saveData = localStorage.getItem('saveData')
    this.game = new Game(gameData, {}, saveData);
    this.game.start();
    this.currentQuestion = this.game.display();
    console.log(this.currentQuestion);
  }

  getAnswersArray() {
    return Object.keys(this.currentQuestion.answers);
  }

  answer(answerKey: string) {
    this.game.answer(answerKey);
    this.currentQuestion = this.game.display();
  }

}
