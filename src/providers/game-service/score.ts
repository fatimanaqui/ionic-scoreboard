export interface IScore { 
   gameId:number, 
   playerOneName:string, 
   playerOneScore:number,
   playerTwoName:string, 
   playerTwoScore:number,
   gameType:string,
   winnerName?:string,
   gameTime?:Date,
   gameLocation?:string
} 
