import { Console } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";

class InputHandler {
  static #carNames = [];
  static #moveCount = 0;

  static get carNames() {
    return this.#carNames;
  }
  static set carNames(carNames) {
    this.#carNames = carNames;
  }

  static get moveCount() {
    return this.#moveCount;
  }
  static set moveCount(moveCount) {
    this.#moveCount = moveCount;
  }

  static async getCarNames() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const names = userInput.split(",").map((element) => element.trim());
    InputValidator.validateCarNames(names);
    this.#carNames = names;
  }
  static async getMoveCount() {
    const userInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const moveCount = parseInt(userInput, 10);
    InputValidator.validateMoveCount(moveCount);
    this.#moveCount = moveCount;
  }
}
export default InputHandler;
