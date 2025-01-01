import {Random} from "@woowacourse/mission-utils";
class MovementCondition{
    static canMove(){
        const randomNumber = Random.pickNumberInRange(0, 9)
        const willMove = randomNumber >= 4
        return willMove
    }

}
export default MovementCondition