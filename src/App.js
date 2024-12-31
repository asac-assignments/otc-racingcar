import {Console, Random} from "@woowacourse/mission-utils";
import InputHandler from "./InputHandler.js"
class App {
  async play() {
    try{
    await InputHandler.getCarNames()
    await InputHandler.getMoveCount()
    }catch(error){
      throw error
      
    }
  }
}

export default App;
