/**
 * Interface
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  jump(): string {
    return `${this.name}이 점프합니다`;
  }
  // 초과는 가능하다.
  dance() {}
}

let ori: any = new Dog("오리", 2);

// type predicate
function instanceOfAnimal(object: any): object is Animal {
  return "jump" in object;
}

if (instanceOfAnimal(ori)) {
  ori; // let ori: Animal
} else {
  ori; // const ori: never
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
  legsCount: number;
  bark(): void;
}

// 상속한 인터페이스의 모든 프로퍼티를 정의해야함.
class Cat implements Animal, Pet {
  name: string;
  age: number;
  legsCount: number;
  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }
  jump(): string {
    return `${this.name}이 점프합니다`;
  }
  bark() {
    console.log(`${this.name}의 다리 갯수는 ${this.legsCount}개 입니다`);
  }
}

// 다중 타입 구현
type AnimalAndPet = Animal & Pet;
class Cat2 implements AnimalAndPet {
  name: string;
  age: number;
  legsCount: number;
  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }
  jump(): string {
    return `${this.name}이 점프합니다`;
  }
  bark() {
    console.log(`${this.name}의 다리 갯수는 ${this.legsCount}개 입니다`);
  }
}

interface wrongInterface1 {
  name: string;
}

interface wrongInterface2 {
  name: number;
}

// never 가 되기 때문에 다중 구현 불가
// class Person implements wrongInterface1, wrongInterface2 {
//   name: string;
// }

class Idol {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 인터페이스에서 class constructor로 객체 초기화ㄴ
interface IdolConstructor {
  new (name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
  return new constructor(name, age); // 매우 중요
}

console.log(createIdol(Idol, "아이유", 30));
