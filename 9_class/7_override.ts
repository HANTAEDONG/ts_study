/**
 * Override
 */
class Parent {
  shout(name: string): string {
    return `${name}이 소리칩니다`;
  }
}

class WronChild extends Parent {
  // (1) 부모 메서드와 반환 타입이 일치해야 한다.
  // (2) 부모 메서드에 필수인 파라미터들이 존재해야 한다.
  // (3) 부모 메서드에서 Optional인 파라미터가 자식 메서드에서 필수로 지정되면 안된다.
  shout(name: string): string {
    return "안녕";
  }
}

class Child extends Parent {
  shout(name: string, age?: number): string {
    if (age) {
      return `${name}은 ${age}살 입니다.`;
    } else {
      return `${name}은 사람입니다`;
    }
  }
}
