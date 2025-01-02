import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

//controller
class Racing {
  #carArray;
  #tryCount;
  constructor(carNameArray, count) {
    this.#carArray = carNameArray.map((carName) => new Car(carName));
    this.#tryCount = count;
    this.racing();
  }

  async racing() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.#carArray.forEach((car) => {
        car.move();
        Console.print(car.carState());
      });
    }
  }
  async announceWinner() {
    const maxForward = Math.max(...this.#carArray.map((car) => car.getForward));
    const winners = this.#carArray.filter(
      (car) => car.getForward === maxForward
    );
    const winnerNames = winners.map((car) => car.getCarName).join(", ");
    return winnerNames;
  }
}
export default Racing;
