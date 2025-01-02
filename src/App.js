import { Console, MissionUtils } from "@woowacourse/mission-utils";
import RacingCar from "./RacingCar.js";
import ValidateInput from "./ValidateInput.js";

class App {
  #racing_cars = []
  #match_num
  async play() {
    await this.#startRacing();
    for (let i = 1; i <= this.#match_num ; i++) {
      this.#moveCars();
      Console.print(i + " 번째 경기 결과");
      this.#printCars();
      Console.print("");
    }
    this.#printWinCars();
  }

  async #startRacing() {
    const input_cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const validateInput = new ValidateInput();
    this.#racing_cars = validateInput.validateCarName(input_cars);
    Console.print("");

    const input_num = await Console.readLineAsync('시도할 경기 횟수는 몇 회인가요?\n');
    this.#match_num = validateInput.validationMathNum(input_num);
    Console.print("");
  }

  #printCars() {
    this.#racing_cars.forEach(car => {
      car.printMovDistance();
    });
  }
  
  #moveCars() {
    this.#racing_cars.forEach(car => {
      car.move();
    });
  }
  
  #printWinCars() {
    let wins = "최종 우승자 : ";
    const distance = this.#getMaxDistance();
    
    // filter로 객체를 만들려고 했지만, 왜인지 빈 객체가 만들어진다.
    // let winCars = this.#racing_cars.filter((car) => {
    //   console.log("car distance : " + car.distance() + " distance : " + distance);
    //   car.distance() == distance;
    // });
    // console.log(winCars + " : " + winCars.length)
    
    const winCars = [];
    this.#racing_cars.forEach(car => {
      if (car.distance() === distance) {
        winCars.push(car);
      }
    });

    for (let i = 0; i < winCars.length; i++) {
      if (i !== 0) {
        wins += ", ";
      }
      wins += winCars[i].name();
    }

    Console.print(wins);
  }

  #getMaxDistance() {
    let num = 0;
    this.#racing_cars.forEach(car => {
      const distance = car.distance();
      if (distance > num)
        num = distance;
    });
    return num;
  }

}

export default App;