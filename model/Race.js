import Car from "./Car";

class Race {
    #cars;

    constructor(carNames) {
        if (!Array.isArray(carNames)) {
            throw new Error("[ERROR] 두 대 이상의 자동차가 필요합니다.");
        }

        const uniqueCars = [...new Set(carNames)];
        if (uniqueCars.length < 2) {
            throw new Error("[ERROR] 두 대 이상의 자동차가 필요합니다.");
        }
        this.#cars = uniqueCars.map((name) => new Car(name));
    }

    proceed() {
        this.#cars.forEach((car) => {
            const randomNumber = Math.floor(Math.random() * 10);
            car.move(randomNumber);
        });
    }

    getCars() {
        return this.#cars;
    }

    getWinners() {
        let max = 0;
        const winners = [];
        for (const car of this.#cars) {
            max = car.getPosition() > max ? car.getPosition() : max;
        }
        for (const car of this.#cars) {
            if (car.getPosition() === max) winners.push(car.getName());
        }
        return winners;
    }
}

export default Race;
