/**
 * Readonly 프로퍼티
 */
class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yuJin = new Idol("안유진", 20);

yuJin.age; // (property) Idol.age: number
yuJin.name; // (property) Idol.name: string
