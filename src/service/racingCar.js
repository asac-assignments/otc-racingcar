import { MissionUtils } from "@woowacourse/mission-utils";

class RacingCar {
    constructor(carNames) {
        this.cars = carNames.map(name => ({
            name,
            position: 0
        }))
    }

    moveCars() {
        this.cars.forEach(car => {
            const randomValue = MissionUtils.Random.pickNumberInRange(0,9)
            if(randomValue >= 4){
                car.position++
            }
        })
    }

}

export default RacingCar

