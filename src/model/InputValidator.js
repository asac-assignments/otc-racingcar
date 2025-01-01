class InputValidator {
  static ERROR_PREFIX = "[ERROR] "; //공통 에러 메시지 접두사
  static CAR_NAME_MAX_LENGTH = 5;

  static ERROR_MESSAGES = {
    EMPTY_CAR_NAMES: "1개 이상의 자동차 이름을 입력해 주세요",
    EMPTY_NAME: "빈 이름이 없어야 합니다.",
    CAR_NAME_LENGTH: `자동차 이름은 ${this.CAR_NAME_MAX_LENGTH}자 이하여야 합니다.`,
    DUPLICATE_NAMES: "자동차 이름은 중복될 수 없습니다.",
    INVALID_MOVE_COUNT: "시도할 횟수는 1이상의 숫자여야 합니다.",
  };
  static throwError(message) {
    throw new Error(`${this.ERROR_PREFIX}${message}`);
  }

  static validateCarNames(carNames) {
    this.checkCarNamesHasElement(carNames);
    this.validateCarNamesAreNotEmpty(carNames);
    this.verifyCarNamesLength(carNames);
    this.verifyNamesAreUnique(carNames);
  }
  static hasOnlyOneEmptyCarName(carNames) {
    return carNames.length < 2 && carNames.includes("");
  }
  static checkCarNamesHasElement(carNames) {
    this.hasOnlyOneEmptyCarName(carNames) && this.throwError(this.ERROR_MESSAGES.EMPTY_CAR_NAMES);
  }

  static validateCarNamesAreNotEmpty(carNames) {
    carNames.includes("") && this.throwError(this.ERROR_MESSAGES.EMPTY_NAME);
  }
  static verifyCarNameLength(carName) {
    return carName.length <= this.CAR_NAME_MAX_LENGTH;
  }
  static throwNameLengthError(carName) {
    !this.verifyCarNameLength(carName) && this.throwError(this.ERROR_MESSAGES.CAR_NAME_LENGTH);
  }
  static verifyCarNamesLength(carNames) {
    carNames.forEach((carName) => this.throwNameLengthError(carName));
  }
  static verifyNamesAreUnique(carNames) {
    const noDuplicates = new Set(carNames);
    return noDuplicates.size !== carNames.length;
  }
  static DuplicateCarNameError(carNames) {
    this.hasDupllicateCarNames(carNames) && this.throwError(this.ERROR_MESSAGES.DUPLICATE_NAMES);
  }
  static isValidateMovecount(moveCount) {
    return moveCount < 1 || isNaN(moveCount);
  }

  static validateMoveCount(moveCount) {
    this.isValidateMovecount(moveCount) && this.throwError(this.ERROR_MESSAGES.INVALID_MOVE_COUNT);
  }
}
export default InputValidator;
