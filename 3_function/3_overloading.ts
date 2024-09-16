/**
 * OverLoading
 */

/**
 * 파라미터
 * 1) 하나 받거나
 * 2) 3개를 받는 함수
 */

// 함수 오버로드ㄴ
function stringOrStrings(members: string): string;
function stringOrStrings(
  member1: string,
  member2: string,
  member3: string
): string;

function stringOrStrings(
  memberOrMembers: string,
  member2?: string,
  member3?: string
): string {
  if (member2 && member3) {
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `아이브: ${memberOrMembers}`;
  }
}

console.log(stringOrStrings("안유진", "장원영", "레이"));
// console.log(stringOrStrings("안유진", "레이")); // 오버로드에 2 인수가 필요하지 않지만, 1 또는 3 인수가 필요하다.

// 오버로드는 실제 구현된 함수가 있어야 할 수 있다.
