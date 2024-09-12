/**
 * Intersection
 *
 * And
 */

interface Human {
  name: string;
  age: number;
}

interface Contact {
  phone: string;
  address: string;
}

type HumanAndContact = Human & Contact;

// 인터섹션 타입으로 합쳐진 모든 타입의 프로퍼티가 존재해야 한다.
let humanANdContact: HumanAndContact = {
  name: "코드팩토리",
  age: 24,
  phone: "010-1234-1234",
  address: "서울",
};

// primitive 타입으로 인터섹션하면 Never 타입됨 => 2가지 이상의 기본 타입을 동시에 충족할 수 없기 때문이다.
let hello: string & number;
