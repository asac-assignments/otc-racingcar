import CarModel from './model.js'; // CarModel 파일에서 가져오기

class CarController{
    #cars=[]

    createCar(name){
        const carModel = new CarModel(name);
        this.getCars().push(carModel);
    }

    updateNewCar(){

    }

    getCars() {
        return this.#cars;
    }

    getCarsInfo(n){
        return this.getCars()[n].getCarInfo()
    }

}

export default CarController;