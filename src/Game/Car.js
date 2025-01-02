import { MissionUtils } from "@woowacourse/mission-utils";
// Model
class Car {
  #carName;
  #forward;
  constructor(name) {
    this.#carName = name;
    this.#forward = 0;
  }
  get getForward() {
    return this.#forward;
  }
  get getCarName() {
    return this.#carName;
  }
  move() {
    const randomMove = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomMove >= 4) {
      this.#forward += 1;
    }
  }
  carState() {
    return `${this.#carName} : ${"-".repeat(this.#forward)}`;
  }
}

export default Car;
