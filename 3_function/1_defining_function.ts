/**
 * Defining Function
 */

// function printName(name) {
//   console.log(name);
// }

// 매개변수 string타입으로 지정
function printName(name: string) {
  console.log(name); // string
}

// 매개변수 2개 이상 넣기
function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}는 아는 사이입니다.`;
}

console.log(returnTwoCouples("유진", "태동"));

/**
 * Optional Parameter
 */
function multiplyOrReturn(x: number, y?: number) {
  return y ? x * y : x;
}

console.log(multiplyOrReturn(10));
console.log(multiplyOrReturn(10, 20));

// 매개변수에 기본값 할당ㄴ
function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
  return args.forEach((i, index) => {
    console.log(index, i);
  });
}

console.log(getInfiniteParameters("한"));

/**
 * Return Types
 */
function AddTwoNumbers(x: number, y: number): number {
  return x + y;
}
AddTwoNumbers(10, 20);

function RandomNumbers() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}
console.log(RandomNumbers()); // 10 | '랜덤'

function subtractNumbers(x: number, y: number): number {
  return x - y;
}

// 화살표 함수로 리턴타입 정의
const subtractNumbersArrow = (x: number, y: number): number => {
  return x - y;
};

/**
 * 특수 반환 타입
 *
 * void/never
 */
// 반환값이 없는 경우: void
function doNotReturn(): void {
  console.log("Do not return");
}

// never 타입 반환 => 반복문이 끝나지 않는 상황이나 에러가 발생하는 상황
function NeverEndingRoof(): never {
  while (true) {}
}
function throwNewError(): never {
  throw Error();
}
