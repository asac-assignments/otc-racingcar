import { MissionUtils } from "@woowacourse/mission-utils";
import View from "./View.js";
import Controller from "./Controller.js";

class App {
  async play() {
    //console.log(MissionUtils.Random.pickNumberInRange(0, 9));
    const controller = new Controller
    await controller.gameStart(await View.inputCarInfo(),await View.inputDistance())
    await controller.gameProgress()
    await controller.gameResult()
  }
}

export default App;
