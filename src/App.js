import InputHandler from "./InputHandler.js"
class App {
  async play() {
    await InputHandler.getCarNames()
    await InputHandler.getMoveCount()
  }
}

export default App;
