import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScoreDetailPage } from "../score-detail/score-detail";
import { GameServiceProvider} from "../../providers/game-service/game-service";
import { IScore } from "../../providers/game-service/score";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scores:IScore[];
  constructor(public navCtrl: NavController,
              public gameServiceProvider: GameServiceProvider) {
                this.scores = this.gameServiceProvider.getScores();

  }

  public viewScore(score:IScore) {
    this.navCtrl.push(ScoreDetailPage, {result: score});
  }
}
