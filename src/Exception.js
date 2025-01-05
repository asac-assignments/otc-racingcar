export default class Exception{

    
    static async nameException(carName){
        if (carName.length > 5){
            console.log("[ERROR] 이름이 잘못된 형식입니다.")
            process.exit(1);
            //throw new Error("[ERROR] 이름이 잘못된 형식입니다.");

            /*
            try {
                if (carName.length > 5) {
                throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
            }
            } catch (error) {
                console.error(error.message);
            }
                */


        }
        
    }

    static async distanceException(carDistance){
        if (carDistance <1){
            console.log("[ERROR] 숫자는 0보다 커야합니다.")
            process.exit(1);
            //throw new Error("[ERROR] 숫자는 0보다 커야합니다.");
        }
        
        
    }
}

