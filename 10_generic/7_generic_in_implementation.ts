/**
 * Generic in implementation
 */
interface Singer<T, V> {
  name: T;
  sing(year: V): void;
}

class Idol implements Singer<string, number> {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sing(year: number): void {
    console.log(`[${year}] ${this.name}이 노래를 부릅니다`);
  }
}

const yuJin = new Idol("안유진");
yuJin.sing(2003);

class idol2<T, V> implements Singer<T, V> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
  sing(year: V): void {
    console.log(`[${year}] ${this.name}이 노래를 부릅니다`);
  }
}

const wonYung = new idol2<string, number>("장원영");
wonYung.sing(2004);
