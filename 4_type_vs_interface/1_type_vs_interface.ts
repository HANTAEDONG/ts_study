/**
 * Type vs Interfaces
 */

// Object 선언
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// function 선언
interface IFunction {
  (x: number, y: number): number;
}

type Tfunction = (x: number, y: number) => number;

/**
 * Type에서 할 수 있지만
 * Interface에서 할 수 없는 것
 */

// (1) primitive 타입 선언
type Name = string;

// (2) union 타입 선언하기
type stringOrBool = string | boolean;

// (3) primitive 리스트나 튜플 타입 선언하기
type stringList = string[];
type tupleList = [number, string];

/**
 * Interface는 할 수 있고
 * type은 못 하는 것
 */
// interface merging => 인터페이스 중복 선언해도 중첩되어 오류 발생 x
interface IRectangle {
  height: number;
}
interface IRectangle {
  width: number;
}

let rectangle: IRectangle = {
  height: 30,
  width: 20,
};

// type은 merging이 안됨.
// type TRectangle = {
//   height: number;
// };

// type TRectangle = {
//   width: number;
// };

/**
 * Interface merging
 */
class Review {
  // 프로퍼티
  getY = (x: number) => {
    return x;
  };
  // 메서드
  getX(x: number) {
    return x;
  }
}

interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

// 같은 인터페이스 같은 경우 같은 프로퍼티 속성이어야 한다.
interface GetXnY {
  getX: (x: number) => number;
  //   getY: (y: string) => number;
}
