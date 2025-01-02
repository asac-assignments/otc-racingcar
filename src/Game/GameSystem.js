import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import GameMessage from "./GameSystemMessage.js";
class GameSystem {
  #tryCount;
  #carArray; //Car객체 배열
  constructor(carNameArray, count) {
    this.#carArray = carNameArray.map((carName) => new Car(carName));
    this.#tryCount = count;
  }
  async start() {
    Console.print(GameMessage.RACE_START_MESSAGE); // 경주 시작 메시지
    for (let i = 0; i < this.#tryCount; i++) {
      this.#carArray.forEach((car) => {
        car.move();
        Console.print(car.carState());
      });
    }
    this.#announceWinner(); // 우승자
  }
  #announceWinner() {
    const maxForward = Math.max(...this.#carArray.map((car) => car.getForward));
    const winners = this.#carArray.filter(
      (car) => car.getForward === maxForward
    );
    const winnerNames = winners.map((car) => car.getCarName).join(", ");
    Console.print(GameMessage.RACE_RESULT_MESSAGE + winnerNames);
  }
}

export default GameSystem;
