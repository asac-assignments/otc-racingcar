import { MissionUtils } from "@woowacourse/mission-utils";
import InputHandler from "./handler/InputHandler.js";

class App {
  async play() {
    const inputHandler = new InputHandler()
    const {carNames, tryCount} = await inputHandler.getInputs()
    MissionUtils.Console.print(`입력받은 자동차 이름: ${carNames.join(', ')}`);
    MissionUtils.Console.print(`입력받은 시도 횟수: ${tryCount}`);
  }
}

export default App;
