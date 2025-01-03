class Validation {
    static validationCarNames(carNames) {
        if(carNames.some(name => name.length > 5)){
            throw new Error('[ERROR] 자동차 이름은 5자 이하로 작성해주세요.')
        }
        if(carNames.length <=1 ){
            throw new Error('[ERROR] 자동차 이름을 1개 이상 작성해주세요.')
        }
    }
}

export default Validation