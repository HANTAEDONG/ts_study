/**
 * Type predicate
 */
function isNumber(input: any): input is number {
  return typeof input === "number";
}

let testValue: any;

if (isNumber(testValue)) {
  testValue; // number로 추론
}

console.log(isNumber(10));

function isNumberBool(input: any): boolean {
  return typeof input === "number";
}

let number: any = 5;
if (isNumberBool(number)) {
  number; // any로 type narrowing 불가
}

if (isNumber(number)) {
  number; // type predicate를 통해 number타입 정확히 추론
}

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat =
  Math.random() > 0.5
    ? {
        name: "도지",
        age: 5,
      }
    : {
        name: "캣",
        breed: "요크셔테리어",
      };

if (isDoge(doge)) {
  doge; // doge
} else {
  doge; // never
}
