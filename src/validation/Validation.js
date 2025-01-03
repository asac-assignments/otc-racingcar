class Validation {
    static validationCarNames(carNames) {
        if(carNames.some(name => name.length > 5)){
            throw new Error('[ERROR] 자동차 이름은 5자 이하로 작성해주세요.')
        }
    }
}

export default Validation