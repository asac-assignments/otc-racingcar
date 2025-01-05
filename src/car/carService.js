class CarService {
    // 에러 코드에 대응하는 메시지
    static getErrorMessage(errorCode) {
        const messages = {
            101: "[ERROR] 문자열이 아닙니다.",
            201: "[ERROR] 쉼표로 구분 가능하지 않습니다.",
            301: "[ERROR] 이름 중 5글자를 초과하는 것이 있습니다.",
            401: "[ERROR] 숫자가 유효하지 않습니다.",
        };
        // 존재하지 않는 코드면 공통 메시지 반환
        return messages[errorCode] ?? "[ERROR] 알 수 없는 에러가 발생했습니다.";
    }

    // validateAndSliceName() 결과를 받아서 최종 slicedName만 추출
    static seperateName(validateResult, view) {
        if (!validateResult.success) {
            view.printError(this.getErrorMessage(validateResult.errorCode));
        }
        return validateResult.slicedName; // ex) ["pobi", "woni", ...]
    }
}

export default CarService;
