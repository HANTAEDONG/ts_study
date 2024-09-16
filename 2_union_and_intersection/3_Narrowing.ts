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
if (numOrString2 === stringOrBool2) {
  stringOrBool2; // string
} else {
  numOrString2; // string | number
  stringOrBool2; // string | true
}

let numOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? "hello" : null;
if (typeof numOrStringOrNull === "number") {
  numOrStringOrNull; // number
} else {
  numOrStringOrNull; // string | null
}

// (5) in operator Narrowing
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  type: string;
}
let human: Human = {
  name: "안유진",
  age: 24,
};
let dog: Dog = {
  name: "흰둥이",
  type: "요크셔테리어",
};
let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;
// "human" 객체 안 "name" 키값이 있나 확인
console.log("name" in human);
if ("type" in humanOrDog) {
  humanOrDog; // Dog
} else {
  humanOrDog; // Human
}

// (6) instanceof narrowing
let dateOrString: Date | string =
  Math.random() > 0.5 ? new Date() : "코드팩토리";
if (dateOrString instanceof Date) {
  dateOrString; // Date
} else {
  dateOrString; // string
}

// (7) Discriminated Union narrowing
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string;
}
let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 180,
      }
    : {
        type: "dog",
        breed: "요크셔테리어",
      };
if (animal.type === "human") {
  animal.height; // number | undefined
} else {
  animal.height; // number | undefined
  animal.breed;
}

interface Human2 {
  type: "human";
  height: number;
}

interface Dog2 {
  type: "dog";
  breed: string;
}
type HumanOrDog2 = Human2 | Dog2;
let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 180,
      }
    : {
        type: "dog",
        breed: "요크셔테리어",
      };
if (humanOrDog2.type === "human") {
  humanOrDog2; // Human2
} else {
  humanOrDog2; // Dog2
}

// 객체 나눠서 접근하는게 유리하다.

// (8) exhaustiveness narrowing
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2; // Human2
    break;
  case "dog":
    humanOrDog2; // Dog2
    break;
  default:
    humanOrDog2; // never => 무조건 도달 불가
}
