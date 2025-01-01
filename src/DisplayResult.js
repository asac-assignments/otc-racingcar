import { Console } from "@woowacourse/mission-utils";
class DisplayResult{
    static DASH= '-';
    static makePositionString(car){
        const positionString = this.DASH.repeat(car.position)
        return `${car.name} : ${positionString}`
        
    }
    static displayPosition(car){
        const positionString = this.makePositionString(car)
        Console.print(positionString)
        Console.print("\n")

    }
    static displayAllPositions(cars){
        cars.forEach(this.displayPosition);
    }

}
export default DisplayResult