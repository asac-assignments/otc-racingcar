import GameSystemMessage from "./GameSystemMessage.js";
//if문을 통해 상위로 error를 전달
class Validator {
  parseCarNames(names) {
    return names.split(",").map((name) => this.#validateCarName(name));
  }
  #validateCarName(name) {
    const carName = name.trim();
    const carNameLength = carName.length;
    if (carNameLength <= 0 || carName.length > 5) {
      throw new Error(GameSystemMessage.ERROR_MESSAGE_CAR_NAME);
    }
    return carName;
  }
  parseTryCount(count) {
    const tryCount = parseInt(count, 10);
    if (isNaN(tryCount) || tryCount <= 0) {
      throw new Error(GameSystemMessage.ERROR_MESSAGE_TRY_COUNT);
    }
    return tryCount;
  }
}

export default Validator;
