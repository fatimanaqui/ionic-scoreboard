//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IScore } from "./score";

/*
  Generated class for the GameServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameServiceProvider {

  constructor() {
    console.log('Hello GameServiceProvider Provider');
  }

  getScores() : IScore[] {
    return [
     {
       gameId:0,
       playerOneName:'Fatima',
       playerOneScore:20,
       playerTwoName:'Lee',
       playerTwoScore:10,
       gameType:'PONG'
     },
      {
       gameId:1,
       playerOneName:'Fatima',
       playerOneScore:11,
       playerTwoName:'Lee',
       playerTwoScore:19,
       gameType:'PONG'
     },
    ]
  }
}
