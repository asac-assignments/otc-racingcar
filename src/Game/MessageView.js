import { Console } from "@woowacourse/mission-utils";
import GameSystemMessage from "./GameSystemMessage.js";
import Validator from "./Validator.js";

class MessageView {
  #validator = new Validator();
  async InputCarNames() {
    const carNameArrayInput = await Console.readLineAsync(
      GameSystemMessage.RACE_CAR_NAME_REQUEST
    );
    const carNameArray = this.#validator.parseCarNames(carNameArrayInput);
    return carNameArray;
  }
  async InputTryCount() {
    const input = await Console.readLineAsync(
      GameSystemMessage.TRY_COUNT_REQUEST
    );
    return this.#validator.parseTryCount(input);
  }
  async announceWinner(winners) {
    Console.print(GameSystemMessage.RACE_RESULT_MESSAGE + winners);
  }
}
export default MessageView;
