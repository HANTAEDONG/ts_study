/**
 * Optional and Undefined Property
 */
interface Dog {
  name: string;
  age: number;
  breed?: string;
}

const byulE: Dog = {
  name: "별이",
  age: 12,
  breed: "미니핀",
};

const ori: Dog = {
  name: "오리",
  age: 3,
};

interface Cat {
  name: string;
  age: number;
  breed: string | undefined;
}

// undefined를 작성해줘야됨. 만약 optional로 해주지 않으면
const nabi: Cat = {
  name: "나비",
  age: 2,
  breed: undefined,
};
