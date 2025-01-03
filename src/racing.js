import View from "./car/view.js";
import Validate from "./car/validate.js";
import CarService from "./car/carService.js";
import CarController from "./car/controller.js";

class Racing {
    async play() {
        try {
            // 뷰 인스턴스 생성
            const view = new View();

            // 자동차 이름 입력받기
            const inputName = await view.inputNameIO();

            //  Validate (이름)
            const nameValidator = new Validate(inputName);
            const nameResult = nameValidator.validateAndSliceName();
            if (!nameResult.success) {
                // 유효성 검사 실패
                view.printError(
                    CarService.getErrorMessage(nameResult.errorCode)
                );
            }

            // 유효성 통과 후, 배열 얻기
            const carsArray = CarService.seperateName(nameResult, view);

            // CarController 생성
            const carController = new CarController(carsArray);

            // 시도 횟수 입력받기
            const inputTurn = await view.carTurnInput();

            // Validate (숫자)
            const turnValidator = new Validate(inputTurn);
            const turnResult = turnValidator.isNum();
            if (!turnResult.success) {
                view.printError(
                    CarService.getErrorMessage(turnResult.errorCode)
                );
            }
            // 최종 시도 횟수(Number)
            const turnCount = turnResult.result;

            // [8] 지정된 횟수만큼 게임 진행
            for (let i = 0; i < turnCount; i++) {
                // 각 턴마다 랜덤 조건에 따라 자동차 전진
                carController.callUpdateLocation();

                //  - 현재 위치 정보 가져오기
                const carsInfo = carController.getCars(); // CarModel 객체 배열
                view.printLocations(carsInfo);
            }

            // [9] 게임 종료 후 승리자 판별
            const winners = carController.endOfGame();
            view.printWinners(winners);
        } catch (error) {
            console.error(error.message);
        }
    }
}

export default Racing;
