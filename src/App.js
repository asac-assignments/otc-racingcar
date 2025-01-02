import GameSystem from "./Game/GameSystem.js";
// view - service - controller - model
class App {
  async play() {
    const game = new GameSystem();
    await game.start();
  }
}

export default App;
