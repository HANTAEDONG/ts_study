/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합할 수 있는 수많은 방법 중 하나이다.
 */
type stringOrBooleanType = string | boolean;

let stringOrBoolean: stringOrBooleanType = true;
stringOrBoolean = "장원영";

// stringOrBoolean = undefined; // 유니온 타입과 다른 타입으로 지정할 수는 없다.

type strBoolNullType = string | boolean | null;

// 타입이 아닌 정확한 값을 유니온 타입으로 지정해줄 수 있다.
type StateTypes = "DONE" | "LOADING" | "ERROR" | "INITIAL";

let state: StateTypes = "DONE";
// state = 3; // 타입 지정에 안 들어가 있는 값은 불가능.

/**
 * 리스트의 유니언
 */
type StringListOrBooleanList = string[] | boolean[];
let stringOrBooleanList: StringListOrBooleanList = [true, false];
// stringOrBooleanList = ["아이유", true]; // 유니언이기 때문에 둘 중 하나의 타입으로만 가능하다.

type StringOrBooleanType = (string | boolean)[]; // 이렇게 선언시 string과 boolean 동시에 배열안 값으로 할당 가능하다.

let stringOrBooleanList1: StringOrBooleanType = ["hello", false];

/**
 * Interface로 사용하는 union
 */

interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: Animal | Human = {
  name: "최지호",
  age: 20,
  address: "대한민국",
};

animalOrHuman = {
  name: "오리",
  age: 10,
};

// Human타입으로 잘 추론함 => 유니온 타입이나 Human만 가지고 있는 프로퍼티가 있기 때문이다.
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log((animalOrHuman as Human).address); // 타입캐스팅의 위험성이다.

let animalOrHuman2:
  | {
      name: string;
      age: number;
    }
  | {
      name: string;
      age: number;
      address: string;
    } = {
  name: "최지호",
  age: 24,
  address: "서울",
};

console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

animalOrHuman2 = {
  name: "오리",
  age: 3,
};
// console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 서로 관계없는 유니언을 선언하면 어떻게 될까?
type Person = {
  name: string;
  age: number;
};

type Cat = {
  breed: string;
  country: string;
};

// let PersonOrCat: Person | Cat;
// let personOrCat: PersonOrCat = {
//   name: "codefactory",
//   age: 33,
// };
