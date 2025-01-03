import { MissionUtils } from "@woowacourse/mission-utils";

export default class Model{
    #carName;
    #carDistance;
    //console.log(MissionUtils.Random.pickNumberInRange(0, 9));
    constructor(carName){
        this.#carName=carName;
        this.#carDistance=0;
    }

    isMoved() {
        //if (MissionUtils.Random.pickNumberInRange(0, 9)%2===1) this.#carDistance++;
        //this.#carDistance=MissionUtils.Random.pickNumberInRange(0, 9);
        if (MissionUtils.Random.pickNumberInRange(0, 9)>4){
            this.#carDistance=this.#carDistance+1;
        }
      }

    getName(){
        return this.#carName
    }

    getDistance(){
        return this.#carDistance
    }
}