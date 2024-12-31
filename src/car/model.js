class CarModel {
    #carName;
    #carLocation= 0;
    #carWin= false;

    constructor(name){
        this.#carName=name;
    }

    setcarName(name) {
        this.#carName= name;
    }

    getcarName() {
        return this.#carName;
    }

    getcatLocation() {
        return this.#carLocation;
    }

    setcarLocation(num) {
        this.#carLocation= num;
    }

    getcarWin() {
        return this.#carWin;
    }

    setcarWin(isWin) {
        this.#carWin= isWin;
    }

    updateLocation(num) {
        this.setcarLocation(this.getcatLocation() + num);
    }

    getCarInfo() {
        return {
            name: this.#carName,
            location: this.#carLocation,
            win: this.#carWin,
        };
    }
}

export default CarModel;