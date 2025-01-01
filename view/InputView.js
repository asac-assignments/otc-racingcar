import { Console } from "@woowacourse/mission-utils";

class InputView {
    static async getCarNames() {
        const input = await Console.readLineAsync(
            "경주할 자동차 이름(쉼표로 구분): "
        );
        if (!input.includes(",")) {
            throw new Error("[ERROR] 두 대 이상의 자동차가 필요합니다.");
        }
        return input.split(",");
    }

    static async getRounds() {
        const input = await Console.readLineAsync(
            "경주할 횟수(1이상 2의 53승 -1 이하 양의 정수): "
        );
        const rounds = Number(input);
        if (!Number.isInteger(rounds) || rounds <= 0) {
            throw new Error("[ERROR] 양의 정수를 입력해야 합니다.");
        }
        return rounds;
    }
}

export default InputView;
