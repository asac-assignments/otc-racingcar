import InputView from "../view/InputView.js";
import Race from "../model/Race.js";
import OutputView from "../view/OutputView.js";

class App {
    async play() {
        try {
            // 입력
            const carNames = await InputView.getCarNames();
            const rounds = await InputView.getRounds();

            // 경주 및 차 객체 생성
            const race = new Race(carNames);

            // 라운드 진행 및 결과 출력
            for (let i = 0; i < rounds; i++) {
                race.proceed();
                OutputView.showRound(race.getCars());
            }

            // 승리자 출력
            OutputView.showWinners(race.getWinners());
        } catch (error) {
            console.error(error.message);
        }
    }
}

export default App;
