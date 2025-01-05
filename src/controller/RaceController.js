import InputView from "../view/InputView.js";
import InputValidator from "./InputValidator.js";
import RaceService from "../service/RaceService.js";
import ResultView from "../view/ResultView.js";


class RaceController {
  constructor() {
    this.inputView = new InputView();
    this.inputValidator = new InputValidator();
    this.raceService = new RaceService();
    this.resultView = new ResultView();
    this.moveCount = 0
  }
  async setCarNames() {
    const userInput = await this.inputView.displayCarNamesPrompt();
    const userCarNames =
      userInput?.split(",").map((element) => element.trim()) || [];
    this.inputValidator.validateCarNames(userCarNames);
    this.raceService = new RaceService(userCarNames);
   
  }

  async setMoveCount() {
    const userInput = await this.inputView.displayMoveCountPrompt();
    const userMoveCount = parseInt(userInput, 10);
    this.inputValidator.validateMoveCount(userMoveCount);
    this.moveCount = userMoveCount;

  }
  set moveCountSetter(moveCount){
    this.moveCount = moveCount
  }
  get moveCountGetter(){
    return this.moveCount
  }

  playRace() {
    this.raceService.createCars()
    for (let round = 0; round < this.moveCount; round++) {
      const currentCarPositons = this.raceService.playRound();
      this.resultView.displayAllPositions(round, currentCarPositons);
    }
    const winners =  this.raceService.determineWinners();
    return winners
   
  }
  showResult(result) {
    this.resultView.displayAllWinners(result);
  }
}
export default RaceController;
