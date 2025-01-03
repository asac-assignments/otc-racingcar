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

    printRaceResult() {
        this.cars.forEach(car => {
            const raceResultBar = '-'.repeat(car.position)
            MissionUtils.Console.print(`${car.name} : ${raceResultBar}`)
        })
    }

    getWinners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position))
        const winners = this.cars.filter(car => car.position === maxPosition)
        return winners.map(car => car.name).join(', ')
    }
}

export default RacingCar

