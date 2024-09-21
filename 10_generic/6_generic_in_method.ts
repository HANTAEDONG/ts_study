/**
 * Method에서 Generic 사용하기
 */

class Idol<T> {
  id: T;
  name: string;
  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello<Time>(logTime: Time) {
    return `[${logTime}] 안녕하세요 제 이름은 ${this.name}이고 ID는 ${this.id}입니다`;
  }
}

const yuJin = new Idol<number>(123, "안유진");
console.log(yuJin.sayHello(123)); // sayHello<number>(logTime: number): string

class Message<T> {
  sayHello<Time>(logTime: Time, message: T) {
    console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
  }
}

const message = new Message<string>();
message.sayHello<number>(2000, "hello");

// 중복되게 제네릭 사용하지 말자
class DuplicatedGenericName<T> {
  sayHello<T>(logTime: T) {
    console.log(`logTime: ${typeof logTime}`);
  }
}

const duplicatedMessage = new DuplicatedGenericName<number>();
duplicatedMessage.sayHello<string>("hello");
