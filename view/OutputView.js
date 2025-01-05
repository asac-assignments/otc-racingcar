import { Console } from "@woowacourse/mission-utils";

class OutputView {
    static showRound(cars) {
        cars.forEach((car) => {
            Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
        });
    }

    static showWinners(carList) {
        Console.print(`최종 우승자: ${carList.join(", ")}`);
    }
}

export default OutputView;
