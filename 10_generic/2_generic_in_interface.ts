/**
 * Generic in Interface
 */
interface Cache<T> {
  data: T[];
  lastUpdate: Date;
}

const cacheData: Cache<string> = {
  data: ["hello", "hi"],
  lastUpdate: new Date(),
};

const cach2: Cache<number> = {
  data: [1, 2],
  lastUpdate: new Date(),
};

// 기본 제네릭 타입 설정
interface DefaultGeneric<T = string> {
  data: T[];
}
const cache3: DefaultGeneric = {
  data: ["1", "2"],
};
