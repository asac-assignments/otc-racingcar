import { Console } from "@woowacourse/mission-utils";
class ResultView{
    constructor(){
       this. DASH= '-';

    }
     
    makePositionString(car){
        const positionString = this.DASH.repeat(car.position)
        return `${car.name} : ${positionString}`
        
    }
   displayPosition(car){
        const positionString = this.makePositionString(car)
        Console.print(positionString)
        Console.print("\n")

    }
     displayAllPositions(round, cars){
        round ===0 && Console.print("실행 결과:\n")
        cars.forEach(car=>this.displayPosition(car));
    }
    displayWinner(winner){
        Console.print(winner)
    }
    displayAllWinners(winners){
        Console.print("최종 우승자:\n")
        winners.forEach(winner=>this.displayWinner(winner))

    }

}
export default ResultView