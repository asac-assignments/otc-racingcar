import {Console, Random} from "@woowacourse/mission-utils";
class InputHandler {
  static #carNames = null;
  static #moveCount = null;

  static get carNames() {
    return this.#carNames;
  }
  static set carNames(carNames){
    this.#carNames = carNames
  }

  static get moveCount () {
    return this.#moveCount;
  }
  static set moveCount(moveCount){
    this.#moveCount = moveCount
  }

  static async getCarNames(){
   try{
    const userInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")
    const names = userInput.split(",")
                .map((element)=>element.trim())
   
    this.#carNames = names
   }catch(error){
    //reject되는 경우
   }
  }


}
export default InputHandler