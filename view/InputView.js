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
}

export default InputView;
