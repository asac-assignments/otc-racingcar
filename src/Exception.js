export default class Exception{

    //이름은 5자이하
    //- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.
    #ERROR_MESSAGE_CAR_NAME;
    constructor(){
        this.#ERROR_MESSAGE_CAR_NAME="adsadsasdsda"
    }
    static async nameException(carNames){
        
    }
}