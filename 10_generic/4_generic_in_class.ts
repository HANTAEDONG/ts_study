/**
 * Class에서 Generic 사용하기
 */
class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Data;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;

// 제네릭 사용하고 클래스 constructor를 통해 초기화까지 진행
class Pagination2<Data, Message> {
  data: Data[];
  message?: Message;
  lastFetchedAt?: Date;
  constructor(data: Data[], message: Message, lastFetchedAt: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

const pagination = new Pagination2<string, string>(
  ["1", "2", "3"],
  "안녕",
  new Date()
);
