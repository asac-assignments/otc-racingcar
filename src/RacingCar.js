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
		const nums = [];
		for (let i = 0; i < 10; i++) {
			nums.push(i);
		}
		const random_num = MissionUtils.Random.pickNumberInList(nums);
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