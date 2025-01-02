import MessageView from "./MessageView.js";
import Racing from "./Racing.js";
// service
class GameSystem {
  async start() {
    const message = new MessageView();
    const carNameArray = await message.InputCarNames();
    const count = await message.InputTryCount();
    const RacingStart = new Racing(carNameArray, count);
    const winners = await RacingStart.announceWinner();
    message.announceWinner(winners);
  }
}

export default GameSystem;
