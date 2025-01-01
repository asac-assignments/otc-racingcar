class Car {
    #name;
    #position;

    constructor(name) {
        if (name.trim().length < 1 && name.trim().length > 5) {
            throw new Error("[ERROR] 이름은 1자 이상 5자 이하만 가능합니다.");
        }
        this.#name = name.trim();
        this.#position = 0;
    }

    move(randomNumber) {
        if (randomNumber < 4) return;
        this.#position++;
    }

    getName() {
        return this.#name;
    }

    getPosition() {
        return this.#position;
    }
}

export default Car;
