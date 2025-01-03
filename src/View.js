import { MissionUtils } from "@woowacourse/mission-utils";
import Exception from "./Exception.js";

export default class View{
    static async inputCarInfo() {
        const carNames = await MissionUtils.Console.readLineAsync
        ("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) : ");
        const carList = carNames.split(",").map(name => name.trim());
        //const carList = Exception.nameException(carNames)
        
        return carList;
    };
    
    static async inputDistance(){
        const distance = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? : ")
        return distance
    }
    



    static async printRaceProgress(carName,carDistance){
        console.log(carName + " : " + "-".repeat(carDistance));
    };

    
    static async printRaceResult(winner){
        
        console.log("최종우승자 : "+winner )
    }


}