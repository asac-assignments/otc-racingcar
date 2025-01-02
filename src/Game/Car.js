import { MissionUtils } from "@woowacourse/mission-utils";
// 자동차 클래스
// 이름과 해당 객체의 이동 수를 기록
class Car {
  #carName;
  #forward;

  // 생성자 정의
  constructor(name) {
    this.#carName = name;
    this.#forward = 0; //문자와 고민, 숫자가 더 범용성이 높을듯듯
  }
  get getForward() {
    return this.#forward;
  }
  get getCarName() {
    return this.#carName;
  }
  move() {
    const randomMove = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomMove >= 4) {
      this.#forward += 1;
    }
  }
  // 현재 차의 이름과 전진 상태를 반환
  carState() {
    return `${this.#carName} : ${"-".repeat(this.#forward)}`;
  }
}

export default Car;
