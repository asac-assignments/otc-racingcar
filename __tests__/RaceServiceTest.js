import RaceService from "../src/service/RaceService";
import { Random } from "@woowacourse/mission-utils";
import Car from "../src/model/Car";

jest.mock("@woowacourse/mission-utils")
describe("RaceService 테스트", () => {
  let raceService;
  const CAR_NAMES = ["BB", "Coot", "Doo"];
  beforeEach(() => {
    raceService = new RaceService(CAR_NAMES);
  });
  test("자동차 생성 테스트", () => {
    raceService.createCars();
    const car1 = new Car(CAR_NAMES[0]);
    const car2 = new Car(CAR_NAMES[1]);
    const car3 = new Car(CAR_NAMES[2]);
    expect(raceService.getCars.length).toBe(3);
    expect(raceService.getCars[0]).toStrictEqual(car1);
    expect(raceService.getCars[1]).toStrictEqual(car2);
    expect(raceService.getCars[2]).toStrictEqual(car3);
  });
  test("라운드 진행 후 자동차 위치 확인", () => {
    raceService.createCars();
    Random.pickNumberInRange.mockReturnValue(4);
    const resultAfterRound = raceService.playRound();
    expect(resultAfterRound[0].position).toBeGreaterThan(0);
    expect(resultAfterRound[1].position).toBeGreaterThan(0);
  });
  test("단일 우승자 결정 테스트", () => {
    raceService.createCars();
    raceService.getCars[0].position = 3; //BB
    raceService.getCars[1].position = 2; //Coot
    raceService.getCars[1].position = 1; //Doo
    const winner = raceService.determineWinners();
    expect(winner).toEqual(["BB"]);
  });
  test("다수 우승자 결정 테스트", () => {
    raceService.createCars();
    raceService.getCars[0].position = 3; //BB
    raceService.getCars[1].position = 2; //Coot
    raceService.getCars[2].position = 3; //Doo
    const winner = raceService.determineWinners();
    expect(winner).toEqual(["BB", "Doo"]);
  });
});
