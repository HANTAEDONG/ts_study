/**
 * Extension
 */
interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "장원영",
  age: 20,
};

type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "아이유",
  age: 20,
};

// 인터페이스와 타입 각각 다른 것을 extend할 수 있다.
interface IIdol2 extends TName {
  age: number;
}

/**
 * Extending muliple
 */
type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "흰둥이",
  age: 1,
  breed: "진돗개",
};

/**
 * Type Overriding
 */
type THeihgt = {
  height: number;
};

type TRectangle = THeihgt & {
  height: string;
  width: number;
};

// const rectangle: TRectangle = {
//   height, => never타입되어 주의해야 한다. => extension시 부모와 같은 타입 사용해야 한다.
//   width: 20,
// };

type TWidth = {
  width: number | string;
};

type TRectangle2 = TWidth & {
  width: number;
  height: number;
};

const rectangle: TRectangle2 = {
  width: 20,
  height: 10,
};
