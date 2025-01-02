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

	move() {
		const random_num = MissionUtils.Random.pickNumberInRange(0, 9);
		if (random_num >= 4) {
			this.#mov_distance += "-";
		}
	}

	distance() {
		return this.#mov_distance.length;
	}

	name() {
		return this.#name;
	}

}

// console.log(MissionUtils.Random.pickNumberInList([1, 9]));
export default RacingCar;