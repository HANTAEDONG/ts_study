/**
 * Narrowing
 *
 * Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추할 수있게 되는것
 */
let numberOrString: number | string = "CodeFactory";
// string타입으로 자동으로 Narrowing됨.
numberOrString;

const decimal = 12.3278;
console.log(decimal.toFixed(2));

// numberOrString.toFixed(2); // string타입으로 유추되어 number타입의 함수를 쓸 수 없다.

/**
 * Narrowing의 종류
 *
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof Narrowing
 * 7) discrimated union Narrowing(차별된 유니온 내로잉)
 * 8) exhaustivness checking
 */

// (1) Assignment Narrowing : 특정 값을 할당해 Narrowing
let NumOrBoolean: number | boolean = false;
console.log(typeof NumOrBoolean); // boolean

// (2) typeof Narrowing :
NumOrBoolean = Math.random() > 0.5 ? 1123 : true;
if (typeof NumOrBoolean === "boolean") {
  console.log(NumOrBoolean); // true => boolean타입으로 Narrowing됨.
} else {
  console.log(NumOrBoolean); // number => number타입으로 Narrowing됨.
}

// (3) Truthiness Narrowing
let NullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];

// true인 경우
if (NullOrString) {
  NullOrString;
} else {
  NullOrString;
}

// (4) Equality Narrowing
let numOrString2: number | string = Math.random() > 0.5 ? 123 : "아이유";
let stringOrBool2: string | boolean = Math.random() > 0.5 ? "아이브" : true;
