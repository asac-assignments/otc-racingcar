import { Console, MissionUtils } from "@woowacourse/mission-utils";
import RacingCar from "./RacingCar.js";
import ValidateInput from "./ValidateInput.js";

class App {
  #racing_cars = []

  async play() {
    await this.startRacing();
    for (let i = 0; i < 15; i++) {
      this.moveCars();
    }
    this.printCars();
  }

  printCars() {
    this.#racing_cars.forEach(car => {
      car.printMovDistance();
    });
  }
  
  moveCars() {
    this.#racing_cars.forEach(car => {
      car.move();
    });
  }

  async startRacing() {
    const input_cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const validateInput = new ValidateInput();
    this.#racing_cars = validateInput.validateCarName(input_cars);
  }
}

export default App;
