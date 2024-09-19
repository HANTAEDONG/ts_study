/**
 * Generic 함수에서 사용하기
 */
function whatValue(value: any) {
  return value;
}

const value = whatValue("test");

function genericWhatValue<T>(value: T): T {
  return value;
}

const genericResult = genericWhatValue<string>("hello"); // string 타입으로 제네릭화 => genericResult: string

const genericResult2 = genericWhatValue("123");

function multipleGenerics<X, Y, Z>(value1: X, value2: Y, value3: Z) {
  return {
    value1,
    value2,
    value3,
  };
}
const multipleGenericResult = multipleGenerics<string, string, number>(
  "hello",
  "hi",
  3
);

function getTuple<X, Y>(val1: X, val2: Y) {
  return [val1, val2] as const;
}

const tuple = getTuple(true, 100); // const tuple: readonly [boolean, number]
