
import { Console } from "@woowacourse/mission-utils";
class InputView {
  constructor() {

    this.carNamesPrompt =
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
    this.moveCountPrompt = "시도할 횟수는 몇 회인가요?\n";
  }

  displayCarNamesPrompt() {
    return Console.readLineAsync(this.carNamesPrompt);
  }
  displayMoveCountPrompt() {
    return Console.readLineAsync(this.moveCountPrompt);
  }
}
export default InputView;
