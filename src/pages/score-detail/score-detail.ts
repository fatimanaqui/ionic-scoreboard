import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IScore } from "../../providers/game-service/score";

/**
 * Generated class for the ScoreDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-detail',
  templateUrl: 'score-detail.html',
})
export class ScoreDetailPage {

  public score:IScore;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = this.navParams.data.result; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreDetailPage');
  }

}
