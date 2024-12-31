//문자열인지 확인 & 문자열 길이 확인
function nameInputValidate(inputName) {
    return typeof inputName === "string" && inputName.length != 0
        ? { success: true, errorCode: 100 }
        : { success: false, errorCode: 101 };
}

//쉼표로 구분이 가능한지 확인 && 띄어쓰기 존재하는지 확인
function commaValidate(inputName) {
    return (!inputName.includes(",") || (inputName.includes(",") && !inputName.includes(", ")))
        ? { success: true, errorCode: 200 }
        : { success: false, errorCode: 201 };
}

// 각 이름이 5글자 이하인지 확인
function nameValidate(input) {
    return input.split(",").every(name => name.trim().length <= 5)
        ? { success: true, errorCode: 300 }
        : { success: false, errorCode: 301 };
}

//유효화 검증 중복 로직 중앙화
function validateStep(validateFunc, input, messages) {
    const validationResult = validateFunc(input);
    return validationResult.success
        ? null
        : { success: false, message: messages[validationResult.errorCode] };
}

//유효화 사이클
export function errorCheck(input) {
    const messages = {
        101: "문자열이 아닙니다.",
        201: "쉼표로 구분 가능하지 않습니다.",
        301: "문자가 5글자 이상인 것이 포함되어 있습니다.",
    };

    const validators = [nameInputValidate, commaValidate, nameValidate];
    for (const validateFunc of validators) {
        const result = validateStep(validateFunc, input, messages);
        if (result) return result;
    }

    return { success: true, message: "유효한 입력입니다." };
}