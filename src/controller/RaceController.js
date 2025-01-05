import InputView from "../view/InputView.js";
import InputValidator from "./InputValidator.js";
import RaceService from "../service/RaceService.js";
import ResultView from "../view/ResultView.js";


class RaceController {
  constructor() {
    this.InputView = new InputView();
    this.InputValidator = new InputValidator();
    this.RaceService = new RaceService();
    this.ResultView = new ResultView();
    this.moveCount = 0
  }
  async setCarNames() {
    const userInput = await this.InputView.displayCarNamesPrompt();
    const userCarNames =
      userInput?.split(",").map((element) => element.trim()) || [];
    this.InputValidator.validateCarNames(userCarNames);
    this.RaceService = new RaceService(userCarNames);
   
  }

  async setMoveCount() {
    const userInput = await this.InputView.displayMoveCountPrompt();
    const userMoveCount = parseInt(userInput, 10);
    this.InputValidator.validateMoveCount(userMoveCount);
    this.moveCount = userMoveCount;

  }
  set moveCountSetter(moveCount){
    this.moveCount = moveCount
  }
  get moveCountGetter(){
    return this.moveCount
  }

  playRace() {
    this.RaceService.createCars()
    for (let round = 0; round < this.moveCount; round++) {
      const currentCarPositons = this.RaceService.playRound();
      this.ResultView.displayAllPositions(round, currentCarPositons);
    }
    const winners =  this.RaceService.determineWinners();
    return winners
   
  }
  showResult(result) {
    this.ResultView.displayAllWinners(result);
  }
}
export default RaceController;
