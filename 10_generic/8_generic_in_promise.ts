/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
};

const runner = async function () {
  const res = await afterTwoSeconds();
  console.log(res);
};

runner();
// Promise의 reolve 타입을 제네릭으로 지정
const afterOneSecond = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
};

const runner2 = async function () {
  const res = await afterOneSecond(); // const res: string
  console.log(res);
};

runner2();
