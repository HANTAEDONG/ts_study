/**
 * Function Type
 */
type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
  return ["안유진", "장원영", "레이"].map(callback);
};

console.log(
  runner((x) => {
    console.log(x);
    return `아이브 멤버: ${x}`;
  })
);

type MulitplyTwoNumbers = (x: number, y: number) => number;

const mulitplyTwoNumbers: MulitplyTwoNumbers = (x, y) => {
  return x + y;
};

/**
 * Interface
 */

interface IMultiplyTwoNumbers {
  (x: number, y: number): number;
}

// interface 통해 각 매개변수 타입과 반환 타입을 명확하게 지정할 수 있다.
const iMultiplyTwoNumbers: IMultiplyTwoNumbers = (x, y) => {
  return x * y;
};
