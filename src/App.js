import { MissionUtils } from "@woowacourse/mission-utils";
import InputHandler from "./handler/InputHandler.js";
import RacingCar from "./service/racingCar.js";

class App {
  async play() {
    const inputHandler = new InputHandler()
    const {carNames, tryCount} = await inputHandler.getInputs()

    const racingCar = new RacingCar(carNames)

    for(let i = 0; i < tryCount; i++){
      racingCar.moveCars()
      racingCar.printRaceResult()
    }

    const winners = racingCar.getWinners()
    MissionUtils.Console.print(`최종 우승자 : ${winners}`)
  }
}

export default App;
