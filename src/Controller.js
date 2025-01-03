import View from "./View.js";
import Model from "./Model.js";
export default class Controller{
    #carList;
    #winner;
    #distance;
    
    constructor(){
        this.#carList=[];
        this.#winner=[];
        this.#distance=0;
           
    }

    async gameStart(carlist,distance){
        this.#carList=carlist
        this.#distance=distance
        console.log(" ")
    }

    
    
    async gameProgress(){
        const models = this.#carList.map(car => new Model(car));
        for (let i = 0; i < this.#distance; i++) {await this.carProgress(models);}
        
        const distances = models.map(model => model.getDistance());
        const maxDistance = Math.max(...distances);

        this.#winner = models.filter(model => model.getDistance() === maxDistance).map(model => model.getName());
        
    }
    

    async carProgress(models){
        models.forEach(model => {model.isMoved()});
        models.forEach(model => {View.printRaceProgress(model.getName(),model.getDistance());});
        console.log(" ");
    }

    async gameResult(){
        
        
        View.printRaceResult(this.#winner);
    }

}
