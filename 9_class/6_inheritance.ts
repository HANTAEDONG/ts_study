/**
 * Inheritance
 */
class Parent {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  dance() {
    console.log(`parent: ${this.name}이 춤을 추비낟`);
  }
}

class Child extends Parent {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
  sing() {
    `child: ${this.name}님이 노래를 부릅니다.`;
  }
}

const codefactory = new Parent("코드팩토리");
const ahri = new Child("아리", 12);

codefactory.dance();
codefactory.name;

let person: Parent;
person = codefactory;
person = ahri; // 자식이 부모 타입이 될 수 있다.

let person2: Child;
// person2 = codefactory; // 부모가 자식 타입이 될 수 없다.
person2 = ahri;

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;
  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

const codefactory2 = new Parent2("코드팩토리");
const ahri2 = new Child2("아리", 3);

let child: Child2;
child = ahri2;
child = codefactory2; // 자식 클래스 프로퍼티가 optional이라 부모가 자식에 대입될 수 있다.
