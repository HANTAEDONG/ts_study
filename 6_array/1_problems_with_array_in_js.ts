/**
 * Problems with Array in Js
 */
// Js는 배열 안에 들어가는 타입 제한 불가ㄴ
const number = [1, "2", 3, "4", 5];

let strings: string[] = ["한태동", "2", "3"];

let stringOrNumbersArray: (string | number)[] = [1, "2", 3, "4", 5];

// 둘 중 하나의 타입만 가능
let stringArrayOrNumberArr: string[] | number[] = [1, 2, 3, 4, 5];
stringArrayOrNumberArr = ["1", "2", "3"];

let boolsArr = [true, false, true]; // boolean[]

const onlyString = ["1", "2", "3"];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyString.length; i++) {
  let item = onlyString[i]; // item: string
}
for (let item of onlyNumbers) {
  // item: number로 추론
}

let number3 = onlyNumbers[0];
// Typescript는 배열의 길이를 신경쓰지 않는다.
let number4 = onlyNumbers[999];
