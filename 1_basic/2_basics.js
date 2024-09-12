"use strict";
/**
 * Types
 */
Object.defineProperty(exports, "__esModule", { value: true });
let helloText = "Hello";
// 'boolean' 형식은 'string' 형식에 할당할 수 없습니다.
// helloText = true;
/**
 * JS의 7가지 기본 타입
 */
// 1. string 타입
const stringVar = "안녕";
// 2. number 타입
const numberVar = 1;
// 3. biging 타입
const bigintVar = BigInt(3333333);
// 4. boolean 타입
const booleanVar = true;
// 5. symbol 타입
const symbolVar = Symbol(1);
// 6. null 타입
const nullVar = null;
// 7. undefined 타입
const undefinedVar = undefined;
/**
 * TS에서만 존재하는 타입
 */
// 1. any 타입 : 아무타입이나 값으로 허용함(최소화 해야됨.)
let anyVar = true;
anyVar = 100;
anyVar = "hello";
// 다른 타입의 값에도 할당할 수 있다.
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// 2. unknown 타입 : 알 수 없는 타입
let unknwonType;
// 어느 타입의 값도 할당 가능함.
unknwonType = "hello";
unknwonType = 100;
// any 타입과 다르게 다른 타입의 변수에 할당 할 수 없다.
// let testNumbe2: number = unknwonType;
// let testString2: string = unknwonType;
// let testBoolean2: boolean = unknwonType;
// any와 unknown 타입에는 할당 할 수 있다.
let unknwonType2 = unknwonType;
let anyType2 = unknwonType;
// 3. never 타입 : 어떠한 값도 저장되거나 반환되지 않는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 100;
/**
 * 리스트 타입
 */
const koreanGirlGroup = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList = [true, false, false];
