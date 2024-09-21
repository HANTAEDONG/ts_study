/**
 * Generic in inheritance
 */
class BaseCache<T> {
  data: T[] = [];
}

class StringCache extends BaseCache<string> {}

const stringCache = new StringCache();
stringCache.data; // string[]

class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();
    this.message = message;
  }
}
const genericChild = new GenericChild<string, string>("error");
genericChild.data; // BaseCache<string>.data: string[]
genericChild.message; // GenericChild<string, string>.message?: string | undefined

/**
 * 제네릭의 inheritance
 */
interface BaseGeneric {
  name: string;
}

// BaseGeneric의 프로퍼티를 포함한 T 타입이어야 한다.
class Idol<T extends BaseGeneric> {
  information: T;
  constructor(informatoin: T) {
    this.information = informatoin;
  }
}

// 상속받은 부모 인터페이스의 프로퍼티는 필수임 => 없으면 오류 발생
const yuJin = new Idol({
  name: "안유진",
  age: 23,
});

/**
 * keyof 함께 사용하기
 */
const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

function objectParser<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const val = objectParser(testObj, "a");

/**
 * 1 === 2 ? true : false
 */
class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: "Female Idol" = "Female Idol";
}

class MaleIdol extends Idol2 {
  type: "Male Idol" = "Male Idol";
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol();
