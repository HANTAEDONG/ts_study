/**
 * Nested Object
 */
type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};

const codefactory: NestedPerson = {
  identity: {
    name: "코드팩토리",
    age: 32,
  },
  nationality: "Korea",
};

// 중첩 객체를 또다른 타입을 통해 정의
type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};

type TPersonIdentity = {
  name: string;
  age: number;
};
const codefactory2: TPerson = {
  identity: {
    name: "코드팩토리",
    age: 32,
  },
  nationality: "Korea",
};

// interface도 마찬가지
