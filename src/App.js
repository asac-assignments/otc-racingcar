import InputView from "../view/InputView.js";

class App {
    async play() {
        try {
            const carNames = await InputView.getCarNames();
            const rounds = await InputView.getRounds();
        } catch (error) {
            console.error(error.message);
        }
    }
}

export default App;
