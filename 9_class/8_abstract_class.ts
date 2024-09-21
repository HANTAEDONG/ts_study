/**
 * Abstract class
 */
abstract class ModelWithId {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}

// const modelwithId = new ModelWithId(123); //추상 클래스의 인스턴스를 만들 수 없습니다.

class Product extends ModelWithId {}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod {
  shout(name: string): string {
    return `${name}이 소리칩니다.`;
  }
}
