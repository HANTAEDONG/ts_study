/**
 * Override
 */
class Parent {
  shout(name: string): string {
    return `${name}이 소리칩니다`;
  }
}

// (1) 부모 메서드와 반환 타입이 일치해야 한다.
// (2) 부모 메서드에 필수인 파라미터들이 존재해야 한다.
// (3) 부모 메서드에서 Optional인 파라미터가 자식 메서드에서 필수로 지정되면 안된다.

class WrongChild extends Parent {
  shout(name: string): string {
    return name;
  }
}

class Child extends Parent {
  shout(name: string, me?: string): string {
    if (!me) {
      return super.shout(name);
    } else {
      return this.shout(name) + ` 내 이름은 ${me}야`;
    }
  }
}

const child = new Child();
console.log(child.shout("태동"));
console.log(child.shout("유진", "태동"));

/**
 * 속성 override
 */
class PropertyParent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// class PropertyChild extends PropertyParent {
//   name: number;

//   constructor(name: number) {
//     this.name = name;
//   }
// }

class PropertyParent2 {
  name?: string | number;
  constructor(name: string | number) {
    this.name = name;
  }
}

class PropertyChild2 extends PropertyParent2 {
  name: string;

  constructor(name: string) {
    super(name);
    this.name = name;
  }
}

const child2 = new PropertyChild2("한태동");
