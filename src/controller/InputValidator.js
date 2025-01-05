class InputValidator {
  constructor(){
    this.ERROR_PREFIX = "[ERROR] "; //공통 에러 메시지 접두사
    this.CAR_NAME_MAX_LENGTH = 5;
    this.ERROR_MESSAGES = {
      EMPTY_CAR_NAMES: "1개 이상의 자동차 이름을 입력해 주세요",
      EMPTY_NAME: "빈 이름이 없어야 합니다.",
      CAR_NAME_LENGTH: `자동차 이름은 ${this.CAR_NAME_MAX_LENGTH}자 이하여야 합니다.`,
      DUPLICATE_NAMES: "자동차 이름은 중복될 수 없습니다.",
      INVALID_MOVE_COUNT: "시도할 횟수는 1이상의 숫자여야 합니다.",
    };

  }

  throwError(message) {
    throw new Error(`${this.ERROR_PREFIX}${message}`);
  }

  validateCarNames(carNames) {
    this.checkCarNamesHasElement(carNames);
    this.validateCarNamesAreNotEmpty(carNames);
    this.verifyCarNamesLength(carNames);
    this.validateNamesAreUnique(carNames)
  }
  hasOnlyOneEmptyCarName(carNames) {
    return carNames.length < 2 && carNames.includes("");
  }
  checkCarNamesHasElement(carNames) {
    this.hasOnlyOneEmptyCarName(carNames) && this.throwError(this.ERROR_MESSAGES.EMPTY_CAR_NAMES);
  }

  validateCarNamesAreNotEmpty(carNames) {
    carNames.includes("") && this.throwError(this.ERROR_MESSAGES.EMPTY_NAME);
  }
   verifyCarNameLength(carName) {
    return carName.length <= this.CAR_NAME_MAX_LENGTH;
  }
  throwNameLengthError(carName) {
    !this.verifyCarNameLength(carName) && this.throwError(this.ERROR_MESSAGES.CAR_NAME_LENGTH);
  }
  verifyCarNamesLength(carNames) {
    carNames.forEach((carName) => this.throwNameLengthError(carName));
  }
  verifyNamesAreUnique(carNames) {
    const noDuplicates = new Set(carNames);
    return noDuplicates.size !== carNames.length;
  }
  validateNamesAreUnique(carNames){
    this.verifyNamesAreUnique(carNames) && this.throwError(this.ERROR_MESSAGES.DUPLICATE_NAMES)
  }
  DuplicateCarNameError(carNames) {
    this.hasDupllicateCarNames(carNames) && this.throwError(this.ERROR_MESSAGES.DUPLICATE_NAMES);
  }
  isValidateMovecount(moveCount) {
    return moveCount < 1 || isNaN(moveCount);
  }

  validateMoveCount(moveCount) {
    this.isValidateMovecount(moveCount) && this.throwError(this.ERROR_MESSAGES.INVALID_MOVE_COUNT);
  }
}
export default InputValidator;
