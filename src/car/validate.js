class Validate {
    #input;

    constructor(input) {
        this.#input = input;
    }

    // 문자열인지 && 비어있지 않은지
    nameInputValidate() {
        return typeof this.#input === "string" && this.#input.length !== 0
            ? { success: true, errorCode: 100 }
            : { success: false, errorCode: 101 };
    }

    // 쉼표 구분 가능 여부
    commaValidate() {
        // 공백을 포함해도 되는지 등 추가 요구사항이 있다면 더 검증 가능
        return this.#input.includes(",")
            ? { success: true, errorCode: 200 }
            : { success: false, errorCode: 201 };
    }

    // 각 이름이 5글자 이하인지
    nameValidate() {
        const slicedName = this.#input.split(",");
        const isValid = slicedName.every((name) => name.length <= 5);
        return isValid
            ? { success: true, errorCode: 300, slicedName }
            : { success: false, errorCode: 301, slicedName: null };
    }

    // 종합 유효성 체크 (이름 전용)
    validateAndSliceName() {
        let result;
        const validators = [
            this.nameInputValidate.bind(this),
            this.commaValidate.bind(this),
            this.nameValidate.bind(this),
        ];

        for (const validator of validators) {
            result = validator();
            if (!result.success) return result;
        }
        return result; // 모든 검사를 통과한 최종 결과
    }

    // 숫자(자릿수 제한 없이)인지 확인
    isNum() {
        const re = /^[0-9]+$/;
        return re.test(this.#input)
            ? { success: true, errorCode: 400, result: Number(this.#input) }
            : { success: false, errorCode: 401, result: null };
    }
}

export default Validate;
