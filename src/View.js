import { MissionUtils } from "@woowacourse/mission-utils";
import Exception from "./Exception.js";

export default class View{
    static async inputCarInfo() {
        
        const carNames = await MissionUtils.Console.readLineAsync
            ("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) : ");
        const carList = carNames.split(",").map(name => name.trim());

        
        carList.map(carList => Exception.nameException(carList));
        /*
        try{
            
            conesole.log(carList.map(carList => Exception.nameException(carList)));
        }catch(error){
            console.error("[ERROR] 이름이 잘못된 형식입니다.");
            //process.exit(1);
            
        }
            */
        return carList
         
        
    };
    
    static async inputDistance(){
        const distance = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? : ")
        
        Exception.distanceException(distance)

        /*
        try{
            
            conesole.log(Exception.distanceException(distance));
        }catch(error){
            console.error("[ERROR] 숫자는 0보다 커야합니다.");
            //process.exit(1);
            
        }
*/
        return distance
    }
    



    static async printRaceProgress(carName,carDistance){
        console.log(carName + " : " + "-".repeat(carDistance));
    };

    
    static async printRaceResult(winner){
        
        console.log("최종우승자 : "+ winner )
    }


}