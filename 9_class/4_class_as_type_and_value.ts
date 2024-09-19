/**
 * Class as Type and Value
 */
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  bark() {
    return `${this.name}이/가 짖습니다`;
  }
}

let ori = new Dog("오리");
console.log(ori.bark());

// ori = "오리"; // 'string' 형식은 'Dog' 형식에 할당할 수 없습니다.

// 클래스를 primitive 타입으로 변환할 수 없지만 또다른 객체로 변환 가능
ori = {
  name: "별이",
  bark() {
    return `${this.name}이/가 짖습니다`;
  },
};
console.log(ori);
