/**
 * Casting
 *
 * Ts에서 Casting하면 JS에는 적용이 되지 않는다.
 */
const codeFactory = "코드팩토리";
const testNumber = 2;

console.log(codeFactory.toUpperCase());
// console.log(testNumber.toUpperCase()); // number타입이기 때문에 함수 실행 불가

let simpleNumber: any = 5;
// any타입이기 때문에 오류가 발생한다.
// console.log(simpleNumber.toUpperCase());
let stringVar = simpleNumber as string;

// string이 아닌 "number" 출력 => 자바스크립트 실행시 캐스팅은 아무런 의미를 갖지 않기 때문이다.
console.log(typeof (simpleNumber as string));

let number = 5;
// 캐스팅을 하면 이런 오류가 발생할 수 있기 때문에 조심해야 한다. => 캐스팅은 주로 더 구체화된 타입으로 지정할 때 사용됨.
console.log((number as any).toUpperCase());
