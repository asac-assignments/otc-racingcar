## 자동차 경주 게임 구현

---
### 실행시

1. (출력) 경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)기준으로 구분)
2. (입력) // 띄어쓰기 없이 ,로만 구분(throw)
3. (출력) 시도할 횟수는 몇 회인가요?
4. (입력) // 숫자만 입력 (throw)

---

### 전진 조건
0에서 9사이 무작위 값을 구한 후 무작위 값이 4 이상

### 우승자
경주 게임 완료 후 우승자 출력, 우승자는 N(N>=0)
* 여러명일 경우 쉼표를 이용해 구분

### 예외처리
잘못된 값 입력한 경우 throw문 사용, [ERROR]로 시작하는 메시지를 가지는 예외 발생 후, 애플리케이션 종료

### 실행결과 예시

```textplain
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

## 기능 설계

### Car

#### Car-Model
* 변수: carName, carLocation, carIsWin
* `updateLocation`: carLocation + 1 저장
* `isWinCheck`: carIsWin에 true/false 저장

#### Car-View
* `printLocation`: 콘솔에 지속적인 출력 - carName : carLocation * '-'
* `printWin`: 경주 끝날시 결과 출력

#### Car-Controller
* `create`: Constructor를 통한 이름: ${사용자입력}, 위치: 0
* `read`: model의 데이터를 view에 전달
* `callUpdateLocation`: 난수 생성 후 업데이트 조건 만족시 model의 update 불러오기
* `callIsWinCheck`: model 위치를 가져와 승리 판별 후, 승리 조건 만족시 model-isWinCheck 불러오기