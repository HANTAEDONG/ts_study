/**
 * Type and Interface
 */

/**
 * Type
 *
 * TS의 타입에 이름을 지어주는 역할
 */

type NewStringType = string;
let stringVar: NewStringType = "hello";

type NewNullType = null;
let nullVar: NewNullType = null;

// union 타입
type MaleOrFemale = "Male" | "Female";

// Object 타입
type IdolType = {
  name: string;
  year: number;
};

const YuJin: IdolType = {
  name: "안유진",
  year: 2000,
};

/**
 * Interface
 *
 * primitive 타입을 지정해줄 수 없다.
 */

interface IdolInterface {
  name: NewStringType;
  year: number;
}

const Iu: IdolInterface = {
  name: "아이유",
  year: 1996,
};

// year 필수 아니게 됨
interface IdolOptional {
  name: string;
  year?: number;
}
const Iu2: IdolOptional = {
  name: "아이유",
};
