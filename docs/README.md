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

-   여러명일 경우 쉼표를 이용해 구분

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

## 1. carModel

-   **변수**

    -   `carName`: 문자열로 자동차 이름
    -   `carLocation`: 숫자로 현재 위치 (기본값 `0`)
    -   `carIsWin`: 불리언으로 승리 여부 (기본값 `false`)

-   **메서드**
    -   **`updateLocation`**
        -   현재 `carLocation` 값을 1 증가
        -   (예: `this.carLocation += 1`)
    -   **`isWinCheck`**
        -   승리 조건을 만족한다고 판단되면 `carIsWin`를 `true`로 설정

---

## 2. carController

-   **`create`**

    -   _설명:_ 입력받은 자동차 이름들을 활용해 `carModel` 객체들을 생성하고 저장
    -   (예: `carModel` 인스턴스를 만들어 배열에 `push`)

-   **`read`**

    -   _설명:_ `carModel`에 있는 데이터를 `view`에 전달해 출력하도록 함

-   **`callUpdateLocation`**

    -   _설명:_ 난수를 생성하고, 특정 조건(예: 난수 >= 4 등)을 만족하면 `carModel.updateLocation`을 호출

-   **`callIsWinCheck`**

    -   _설명:_ `carModel`의 위치를 확인하여 승리 조건을 만족하면 `carModel.isWinCheck` 호출

-   **`endOfGame`**
    -   _설명:_ 현재 턴이 모두 진행되었는지 확인하고, 게임이 끝났다면 승리 상태(`carIsWin === true`)인 자동차 목록을 `view`에 전달해 최종 결과를 출력

---

## 3. carService

-   **`seperateName`**

    -   _설명:_ 사용자가 입력한 이름 문자열(`inputName`)을 콤마(`,`) 기준으로 나눈 뒤,
        -   `validate` 모듈을 이용해 예외 처리를 진행
        -   성공 시 나눠진 문자열 배열을 반환

-   **`throwError`**
    -   _설명:_ 예외 조건이 발생했을 때 예외 객체를 생성해 던지거나,
        -   필요한 경우 `view`에 에러 메시지를 전달해 출력

---

## 4. view

-   **변수**

    -   `turn`: 턴(시도) 횟수를 관리
    -   `inputName`: 입력받은 자동차 이름 문자열
    -   `slicedName`: 콤마로 분리된 자동차 이름 배열

-   **메서드**
    -   **`inputNameIO`**
        -   사용자로부터 받은 자동차 이름 문자열을 `inputName`에 저장
    -   **`inputTurn`**
        -   사용자로부터 받은 턴(숫자)을 내부 변수(예: `turn`)에 저장
    -   **`printError`**
        -   오류 발생 시 에러 메시지를 출력
    -   **`printLocation`**
        -   진행 상황 출력 (예: `"carName : ---"`)
        -   `carLocation`만큼 `"-"`을 이어붙여 시각화
    -   **`printWin`**
        -   최종 승리한 자동차 이름들을 출력

---

## 5. validate

-   **`nameInputValidate`**

    -   _설명:_ 입력값이 공백이 아닌지, 문자열인지 등 확인
    -   성공 시 `{ success: true, errorcode: 100 }` 형태
    -   실패 시 `{ success: false, errorcode: 101 }` 형태

-   **`commaValidate`**

    -   _설명:_ 입력값 안에 콤마(`,`)가 포함되어 있는지, 콤마로 구분 가능한지 검사
    -   성공 시 `{ success: true, errorcode: 200 }`
    -   실패 시 `{ success: false, errorcode: 301 }`

-   **`nameValidate`**

    -   _설명:_ 콤마로 구분된 각 이름이 5글자 이하인지 검사
    -   성공 시 `{ success: true, errorcode: 300, slicedName: ['나눠진값들'] }`
    -   실패 시 `{ success: false, errorcode: 301 }`

-   **`validateAndSlice`**

    -   _설명:_ 위의 검증 로직(`nameInputValidate`, `commaValidate`, `nameValidate`)을 순서대로 수행
    -   어떤 에러가 발생했는지 판단하여 최종 결과(`true`/`false`) 및 메시지, 나눈 값(`slicedName`) 반환

-   **`isNum`**
    -   _설명:_ 입력값이 숫자인지 판별
    -   숫자가 아닐 경우 예외 상황 처리(예: `view`에 에러 전달)
