class InputValidator {
  static ERROR_PREFIX = "[ERROR] "; //공통 에러 메시지 접두사
  static validateCarNames(carNames) {
    this.checkCarNamesLength(carNames);
    this.validateCarNamesAreNotEmpty(carNames);
    this.verifyCarNameLength(carNames);
    this.checkUniqueCarNames(carNames);
  }
  static checkCarNamesLength(carNames) {
    if (carNames.length < 1) {
      throw new Error(
        `${this.ERROR_PREFIX}1개 이상의 자동차 이름을 입력해 주세요`
      );
    }
  }
  static validateCarNamesAreNotEmpty(carNames) {
    if (carNames.includes("")) {
      throw new Error(`${this.ERROR_PREFIX}빈 이름이 없어야 합니다.`);
    }
  }
  static verifyCarNameLength(carNames) {
    carNames.forEach((element) => {
      if (element.length > 5) {
        throw new Error(
          `${this.ERROR_PREFIX}자동차 이름은 5자 이하여야 합니다.`
        );
      }
    });
  }
  static checkUniqueCarNames(carNames) {
    const noDuplicates = new Set(carNames);
    if (noDuplicates.size !== carNames.length) {
      throw new Error(`${this.ERROR_PREFIX}자동차 이름은 중복될 수 없습니다.`);
    }
  }
  static validateMoveCount(moveCount){
    if(moveCount < 1 || isNaN(moveCount)){
        throw new Error(`${this.ERROR_PREFIX} 시도할 횟수는 1이상의 숫자여야 합니다.`)
    }
  }
}
export default InputValidator;
