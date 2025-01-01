import MovementCondition from "./MovementCondition.js";
class Car{
    #name
    #position

    constructor(name){
        this.#name = name;
        this.#position = 0;
    }
    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name
    }
    get position(){
        return this.#position
        
    }
    set position(position){
        this.#position = position
    }
    move(){
        if(MovementCondition.canMove()){
            this.#position += 1
        }
    }


}
export default Car