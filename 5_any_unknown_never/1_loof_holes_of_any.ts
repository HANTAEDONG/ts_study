/**
 * Loop holes of any
 */

let number: number;
number = 10;

// number.toUppercase(); // ts에서 오류 발생시켜줌

// (number as any).toUppercase(); // 타입 캐스팅으로 인해 오류 발생시키지 않아 런타임에서 오류 발생

const multiplyTwo = (x: number, y: number): number => {
  return x * y;
};

let arg1: any = "코드팩토리";
let arg2: any = true;
// multiplyTwo(arg1, arg2); // any 타입은 다른 타입에 할당 가능하기 때문에 오류 잡아주지 못함.

let iu: any = { name: "아이유", age: 20 };
iu.name; // Object의 프로퍼티도 인식하지 못함.

const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x, y);
};

const callback = (x: number, y: number) => {
  return x * y;
};

console.log(callbackRunner(5, 4, callback));
