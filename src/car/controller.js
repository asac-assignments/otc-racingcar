import { Random } from "@woowacourse/mission-utils";
import CarModel from "./model.js";

class CarController {
    #cars = [];

    constructor(slicedNames) {
        for (const name of slicedNames) {
            this.#cars.push(new CarModel(name));
        }
    }

    getCars() {
        return this.#cars;
    }

    callUpdateLocation() {
        for (const car of this.#cars) {
            const randomNumber = Random.pickNumberInRange(0, 9);
            if (randomNumber >= 4) {
                car.updateLocation();
            }
        }
    }

    endOfGame() {
        // 가장 멀리 간 거리를 찾는다
        const maxLocation = Math.max(
            ...this.#cars.map((car) => car.getcarLocation())
        );

        // 각 차별로 승리 여부 업데이트
        this.#cars.forEach((car) => {
            car.isWinCheck(maxLocation);
        });

        // 승리한 자동차만 뽑아 리턴
        return this.#cars
            .filter((car) => car.getcarWin())
            .map((car) => car.getcarName());
    }
}

export default CarController;
