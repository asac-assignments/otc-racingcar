import Car from "../src/model/Car";
import { Random } from "@woowacourse/mission-utils";
jest.mock("@woowacourse/mission-utils")
describe("Car 클래스 테스트",()=>{
    let car;
    beforeEach(()=>{
        car = new Car("BB")
    })
    test("isAbleToMove가 true일때 자동차가 이동하는지 확인",()=>{
        Random.pickNumberInRange.mockReturnValue(4);
        car.move();
        expect(car.position).toBe(1);
    })
    test("isAbleToMove가 false일때 자동차가 이동하는지 확인",()=>{
        Random.pickNumberInRange.mockReturnValue(3);
        car.move();
        expect(car.position).toBe(0);
    })

})