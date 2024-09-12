/**
 * Type Inference
 *
 * 타입 추론
 */

// 자동으로 string 타입으로 추론
let stringVar = "string";
let booleanType = true;
let numberType = 23;

// 타입 추론으로 초기화 된 값은 다른 타입으로 변경이 불가하다.
// 'number' 형식은 'boolean' 형식에 할당할 수 없습니다.
// booleanType = 3;

// const constStringType: "const string"
// const로 선언되었기 때문에 그 값만 입력 가능 => 스트링 리터럴 타입
const constStringType = "const string";
// false로 변경 불가
const constBooleanType = true;

// Object 타입 추론도 잘 됨.
let yuJin = {
  name: "안유진",
  year: 2003,
};

// const로 작성해도 프로퍼티 값 변경 가능 => 기본 타입이 아니기 때문이다.
const yuJIn2 = {
  name: "안유진",
  year: 2003,
};

yuJIn2.name = "아이유";

const yuJIn3 = {
  // 프로퍼티 값 구체화 => 변경 불가
  name: "안유진" as const,
  year: 2003,
};

// as const로 인해 값 변경이 불가능
// yuJIn3.name = "아이즈원"

/**
 * Array
 *
 */
let numbers = [1, 2, 3, 4, 5];
// (string | number)[]
let numbersAndStrings = [1, 2, 3, "4", "5"];

numbers.push(5);
// 타입 추론으로 인해 이미 number[]가 되어 다른 타입 값 넣을 수 없음
// numbers.push("hello");

// number로 타입 추론
const number = numbers[0];
// number | string
const nos = numbersAndStrings[0];

// 범위를 벗어나는 인덱스에 대한 오류를 잡지 못함.
console.log(numbersAndStrings[100]);

// tuple : readonly [1, 2]
const twoNumbers = [1, 2] as const;
// 튜플은 범위 벗어나는 인덱스에 대한 오류 발생시킴 => 타입스크립트의 큰 장점
// console.log(twoNumbers[3]);
