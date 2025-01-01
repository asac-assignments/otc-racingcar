import InputView from "../view/InputView.js";

class App {
    async play() {
        try {
            const carNames = InputView.getCarNames();
        } catch (error) {
            console.error(error.message);
        }
    }
}

export default App;
