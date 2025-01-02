import { Console } from "@woowacourse/mission-utils";
import GameMessage from "./GameSystemMessage.js";
import Racing from "./Racing.js";
import Validator from "./Validator.js";

// service
class GameSystem {
  #validator = new Validator();
  async InputCarNames() {
    const carNameArrayInput = await Console.readLineAsync(
      GameMessage.RACE_CAR_NAME_REQUEST
    );
    const carNameArray = this.#validator.parseCarNames(carNameArrayInput);
    return carNameArray;
  }
  async InputTryCount() {
    const input = await Console.readLineAsync(GameMessage.TRY_COUNT_REQUEST);
    return this.#validator.parseTryCount(input);
  }
  async start() {
    const carNameArray = await this.InputCarNames();
    const count = await this.InputTryCount();
    const RacingCar = new Racing(carNameArray);
    this.racing(RacingCar, count);
  }
  async racing(array, count) {
    for (let i = 0; i < count; i++) {
      array.forEach((car) => {
        car.move();
        Console.print(car.carState());
      });
    }
    this.#announceWinner(array);
  }
  #announceWinner(array) {
    const maxForward = Math.max(...array.map((car) => car.getForward));
    const winners = array.filter((car) => car.getForward === maxForward);
    const winnerNames = winners.map((car) => car.getCarName).join(", ");
    Console.print(GameMessage.RACE_RESULT_MESSAGE + winnerNames);
  }
}

export default GameSystem;
