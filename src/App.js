import RaceContoller from "./controller/RaceController.js"
class App {
  async play() {
    try{
    const raceController = new RaceContoller()
    await raceController.setCarNames()
    await raceController.setMoveCount()
    const result = raceController.playRace()
    raceController.showResult(result)

    }catch(error){
      throw error
      
    }
  }

}


export default App;
