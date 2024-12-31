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
* 변수: carName, carLocation = 0, carIsWin = false
* `updateLocation`: carLocation + 1 저장
* `isWinCheck`: carIsWin에 true/false 저장

#### Car-View
* `printLocation`: 출력 - 'carName : carLocation * '-' '
* `printWin`: 결과 출력

#### Car-Controller
* `create`: User-Controller의 `seperateName` 반환값 이용, Constructor를 통한 이름: ${사용자입력}, 위치: 0
* `read`: model의 데이터를 view에 전달 및 출력 함수 실행
* `callUpdateLocation`: 난수 생성 후 업데이트 조건 만족시 model의 updateLocation 불러오기
* `callIsWinCheck`: model 위치를 가져와 승리 판별 후, 승리 조건 만족시 model-isWinCheck 불러오기
* `endOfGame`: 현재 턴의 횟수를 확인 후, 끝났으면 View의 carIsWin이 true인 것들을 가져와서 printWin 실행

### User

#### User-Model
* 변수: inputName, inputNumber, seperatedName
* `inputNameIO`: inputName에 string으로 값을 넣음
* `inputNumberIO`: inputNumber에 Number로 값을 넣음
* `inputseperatedName`: 나눠진 결과값 seperatedName에 저장

#### User-View
* `printError`: 에러 출력

#### User-Controller
* `seperateName`: inputName을 ,으로 나누고 validate 진행 후 나눠진 결과값 배열로 반환

#### User-Validate
* `nameInputValidate`: 잘못되지 않음을 구분(success: true/false, errorcode: 100/101)
* `commaValidate`: 쉼표로 구분이 가능한지(success: true/false, errorcode: 200/301)
* `nameValidate`: 이름이 5글자 이하인지(success: true/false, errorcode: 300/301)
* `errorCheck`: 어떤 에러인지 확인하고 value 반환