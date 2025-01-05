import Car from "../model/Car.js";
class RaceService {
  #carNames;
  #cars;
  constructor(carNames) {
    this.#carNames = carNames;
    this.#cars = [];
  }

  get getCarNames() {
    return this.#carNames;
  }
  get getCars() {
    return this.#cars;
  }
  set setCars(cars) {
    this.#cars = cars;
  }

  createCars() {
    const carInitialInformation = this.#carNames.map((name) => new Car(name));
    this.#cars = carInitialInformation;
  }
  moveCars() {
    this.#cars.forEach((car) => car.move());
  }
  playRound() {
    this.moveCars();
    const currentCars = this.#cars.map((car) => ({
      name: car.name,
      position: car.position,
    }));
    return currentCars;
  }

  determineWinners() {
    const positionsOfCars = this.#cars.map((car) => car.position);
    const maxPosition = Math.max(...positionsOfCars);

    const winners = this.#cars.filter((car) => car.position === maxPosition);
    const winnersToString = winners.map((car) => car.name.toString());
    return winnersToString;
  }
}
export default RaceService;
