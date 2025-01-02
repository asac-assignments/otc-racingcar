class Validate {
    #messages = {
        101: "문자열이 아닙니다.",
        201: "쉼표로 구분 가능하지 않습니다.",
        301: "문자가 5글자 이상인 것이 포함되어 있습니다.",
    };
    #inputName;

    constructor(inputName) {
        this.#inputName = inputName;
    }

    getinputName() {
        return this.#inputName;
    }

    getMessages() {
        return this.#messages;
    }

    //문자열인지 확인 & 문자열 길이 확인
    nameInputValidate() {
        return typeof this.getinputName() === "string" &&
            this.getinputName().length != 0
            ? { success: true, errorCode: 100 }
            : { success: false, errorCode: 101 };
    }

    //쉼표로 구분이 가능한지 확인 && 띄어쓰기 존재하는지 확인
    commaValidate() {
        return this.getinputName().includes(",") ||
            (this.getinputName().includes(",") &&
                !this.getinputName().includes(", "))
            ? { success: true, errorCode: 200 }
            : { success: false, errorCode: 201 };
    }

    // 각 이름이 5글자 이하인지 확인
    nameValidate() {
        const slicedName = this.getinputName().split(",");
        return slicedName.every((name) => name.length <= 5)
            ? { success: true, errorCode: 300, slicedName: slicedName }
            : { success: false, errorCode: 301, slicedName: null };
    }

    //유효화 사이클
    validateAndSliceName() {
        let result;
        const validators = [
            this.nameInputValidate.bind(this),
            this.commaValidate.bind(this),
            this.nameValidate.bind(this),
        ];
        for (const validateFunc of validators) {
            result = validateFunc();
            if (!result.success) return result;
        }
        return result;
    }
}

export default Validate;
