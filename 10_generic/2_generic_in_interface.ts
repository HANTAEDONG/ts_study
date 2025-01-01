/**
 * Generic in Interface
 */

// data가 list로 들어가게 되는데 어떤 타입이든 들어가나, 타입체크를 받고 싶은 상황
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
