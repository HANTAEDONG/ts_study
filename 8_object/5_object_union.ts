/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */

const dogOrCat =
  Math.random() > 0.5
    ? { name: "별이", age: 3 }
    : { name: "오리", breed: "코리안 길냥이" };

dogOrCat.name; // string
dogOrCat.breed; // string | undefined

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat =
  Math.random() > 0.5
    ? { name: "별이", age: 3 }
    : { name: "오리", breed: "코리안 길냥이" };

dogOrCat2.name;
// dogOrCat2.age;   // 에러 발생: 유니온 타입이므로 없는 객체가 있기 때문에

// Narrowing해줘야 됨
if ("age" in dogOrCat2) {
  dogOrCat2.name;
  dogOrCat2.age;
} else {
  dogOrCat2.breed;
  dogOrCat2.name;
}
