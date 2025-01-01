import InputValidator from "../model/InputValidator.js";
import InputView from "../view/InputView.js";
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
    const userInput = await InputView.displayCarNamesPrompt()
    
    const names = userInput?.split(",").map((element) => element.trim()) || []
    InputValidator.validateCarNames(names)
    this.#carNames = names
  }
  static async getMoveCount() {
    const userInput = await InputView.displayMoveCountPrompt()
    const moveCount = parseInt(userInput, 10);
    InputValidator.validateMoveCount(moveCount);
    this.#moveCount = moveCount;
  }
}
export default InputHandler;
