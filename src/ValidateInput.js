import RacingCar from "./RacingCar.js";

class ValidateInput {

	validateCarName(input_cars) {
		const split_input_cars = input_cars.split(",");
		const cars = [];

    for (let car of split_input_cars) {
			cars.push(new RacingCar(car));
    }
		return cars;
  }
}

export default ValidateInput;