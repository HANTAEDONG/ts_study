/**
 * Enum
 */

/**
 * API 요청한다.
 * 상태는 4가지 상태
 *
 * 1. DONE - 요청 완료 상태
 * 2. ERROR - 에러 발생 상태
 * 3. LOADING - 로딩 상태
 * 4. INITIAL - 초기 상태
 */
function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";
    // 작업을 한다.

    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}

// 비교할 때 잘못 입력해주면 오류 발생 => 치명적 단점
console.log(runWork() === "DONNE");

// 전통적인 js 비교 방식
const doneState = "DONE";
const errorState = "ERROR";
const loadingState = "LOADING";
const initialState = "INITIAL";
console.log(runWork() === doneState);

enum State {
  DONE,
  LOADING,
  INITIAL,
  ERROR,
}

function runWork2() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // 작업을 한다.

    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}
console.log(runWork2() === State.DONE);
console.log(runWork2());
