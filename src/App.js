import { Console } from "@woowacourse/mission-utils";
import GameSystem from "./Game/GameSystem.js";
import GameMessage from "./Game/GameSystemMessage.js";
import Validator from "./Game/Validator.js";

class App {
  #validator = new Validator(); // 조건 확인용 객체 생성
  async play() {
    const CarNameArray = await this.#RaceCarNameRequest(); // 차 이름 받기
    const count = await this.#TryCountRequest(); // 시도 횟수 받기
    const game = new GameSystem(CarNameArray, count);
    game.start(); // 시도 횟수 받기
  }
  async #RaceCarNameRequest() {
    const carNameArrayInput = await Console.readLineAsync(
      GameMessage.RACE_CAR_NAME_REQUEST
    );
    const carNameArray = this.#validator.parseCarNames(carNameArrayInput);
    return carNameArray;
  }
  async #TryCountRequest() {
    const input = await Console.readLineAsync(GameMessage.TRY_COUNT_REQUEST);
    return this.#validator.parseTryCount(input);
  }
}

export default App;
