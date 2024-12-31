import { Console, MissionUtils } from "@woowacourse/mission-utils";

class RacingCar {
	#name
	#mov_distance = ""

	constructor(name) {
		this.#name = name;
	}

	printMovDistance() {
		Console.print(this.#name + " : " + this.#mov_distance);
	}
}

// console.log(MissionUtils.Random.pickNumberInList([1, 9]));
export default RacingCar;