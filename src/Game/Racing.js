import Car from "./Car.js";

//controller
class Racing {
  constructor(carNameArray) {
    return carNameArray.map((carName) => new Car(carName));
  }
}
export default Racing;
