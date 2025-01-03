import { Console } from "@woowacourse/mission-utils";

class View {
    async inputNameIO() {
        return Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
        );
    }

    async carTurnInput() {
        return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    }

    printError(message) {
        throw new Error(message);
    }

    printLocations(carsInfo) {
        carsInfo.forEach((car) => {
            const locationLine = "-".repeat(car.getcarLocation());
            Console.print(`${car.getcarName()} : ${locationLine}`);
        });
        Console.print(""); // 줄바꿈
    }

    printWinners(winners) {
        Console.print(`최종 우승자: ${winners.join(", ")}`);
        Console.close();
    }
}

export default View;
