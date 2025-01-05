import InputValidator from "../src/controller/InputValidator"


  describe("InputValidator 테스트", ()=>{
    
    const ERROR_PREFIX = "[ERROR] "
    const CAR_NAME_MAX_LENGTH = 5
    const ERROR_MESSAGES = {
        EMPTY_CAR_NAMES: `${ERROR_PREFIX}1개 이상의 자동차 이름을 입력해 주세요`,
        EMPTY_NAME: `${ERROR_PREFIX}빈 이름이 없어야 합니다.`,
        CAR_NAME_LENGTH: `${ERROR_PREFIX}자동차 이름은 ${CAR_NAME_MAX_LENGTH}자 이하여야 합니다.`,
        DUPLICATE_NAMES: `${ERROR_PREFIX}자동차 이름은 중복될 수 없습니다.`,
        INVALID_MOVE_COUNT: `${ERROR_PREFIX}이동할 횟수는 1이상의 숫자여야 합니다.`,
      };
    let inputValidator
    beforeEach(()=>{
        inputValidator = new InputValidator()
    })
    test("유효한 자동차 입력 검증", ()=>{
        const carNames = ["BB", "Seoha"]
       expect(()=>inputValidator.validateCarNames(carNames)).not.toThrow()
    })
    test("빈 자동차 이름 검증",()=>{
        const carNames = ["BB",""]
        expect(()=>inputValidator.validateCarNames(carNames)).toThrow(ERROR_MESSAGES.EMPTY_NAME)
        
    })
    test("중복된 자동차 이름 검증",()=>{
        const carNames = ["BB", "BB"]
        expect(()=>inputValidator.validateCarNames(carNames)).toThrow(ERROR_MESSAGES.DUPLICATE_NAMES)
    })
    test("자동차 이름 길이 검증",()=>{
        const carNames = ["Bookbo", "BB"]
        expect(()=>inputValidator.validateCarNames(carNames)).toThrow(ERROR_MESSAGES.CAR_NAME_LENGTH)
    })
    test("1개 이상의 자동차 길이 입력 검증",()=>{
        const carNames = [""]
        expect(()=>inputValidator.validateCarNames(carNames)).toThrow(ERROR_MESSAGES.EMPTY_CAR_NAMES)
    })
    test("문자로 입력된 이동 횟수 검증",()=>{
        const invalidateMoveCount = "a"
        expect(()=>inputValidator. validateMoveCount(invalidateMoveCount)).toThrow(ERROR_MESSAGES.INVALID_MOVE_COUNT)
    } )
    test("빈 이동 횟수 입력 검증",()=>{
        const invalidateMoveCount = ""
        expect(()=>inputValidator. validateMoveCount(invalidateMoveCount)).toThrow(ERROR_MESSAGES.INVALID_MOVE_COUNT)
    } )
    test("1 이상의 이동 횟수 입력 검증",()=>{
        const invalidateMoveCount = "0"
        expect(()=>inputValidator. validateMoveCount(invalidateMoveCount)).toThrow(ERROR_MESSAGES.INVALID_MOVE_COUNT)
    } )
  })

