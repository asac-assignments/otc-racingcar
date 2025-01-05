import { Console } from "@woowacourse/mission-utils";
class ResultView {
  constructor() {
    this.DASH = "-";
  }

  makePositionString(car) {
    const positionString = this.DASH.repeat(car.position);
    return `${car.name} : ${positionString}`;
  }
  displayPosition(car) {
    const positionString = this.makePositionString(car);
    Console.print(positionString);
  }
  displayAllPositions(round, cars) {
    round === 0 && Console.print("\n실행 결과");
    cars.forEach((car) => this.displayPosition(car));
    Console.print("\n")
  }
  displayWinner(winner) {
    Console.print(winner);
  }
  displayAllWinners(winners) {
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}
export default ResultView;
