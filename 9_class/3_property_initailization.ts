/**
 * Property Initialization
 */
class Person {
  // 일반적인 필수값 선언
  name: string;
  age: number;
  // 초깃값 제공 선언법
  country: string = "대한민국";
  // Optional 값 선언법
  address?: string;
  // typeof undefined 선언법
  petAge: number | undefined;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class RouteStack {
  // 초기화가 보장됐음을 알려줌
  stack!: string[];

  constructor() {
    this.initialize();
  }
  initialize() {
    this.stack = [];
  }
}

const routeStack = new RouteStack();
console.log(routeStack);
