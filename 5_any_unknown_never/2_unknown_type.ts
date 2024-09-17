/**
 * Unknown Type
 */
let anyValue: any;
anyValue = 24;
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;
unknownValue = 24;
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue;
// let unknwonType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// unknown 타입은 any와 unknown에만 할당 가능ㄴ
let anyType: any = unknownValue;
let unknwonType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

// anyValue.toUpperCase();
// anyValue.name;
// new anyValue;

// unknownValue.toUpperCase(); // unknown타입은 알지 못하는 타입에 대한 함수 실행 막음

function isString(target: unknown): target is string {
  return typeof target === "string";
}

let testValue: unknown;

if (isString(testValue)) {
  testValue; // string으로 잘 유추
}

/**
 * Union Type
 */
type uOrString = unknown | string; // unknown타입으로 추론
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any; // any 타입으로 추론

/**
 * Intersection Type
 */
type uAndString = unknown & string; // string
type uAndAny = unknown & any; // any
