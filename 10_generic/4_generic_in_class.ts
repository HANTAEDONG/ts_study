class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Date;
}

const pgData: Pagination<string, string> = {
  data: ["hello", "test"],
  message: "test",
  lastFetchedAt: new Date(),
};

const pgData2 = new Pagination<number, string>();
pgData2.data; // number[]
pgData2.message; // string | undefined
pgData2.lastFetchedAt; // Date | undefined

class Pagination2<Data, Message> {
  data: Data[];
  message?: Message;
  lastFetchedAt?: Date;

  constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
    this.data = data;
    this.message = message;
    this.lastFetchedAt = lastFetchedAt;
  }
}

const pagination2 = new Pagination2([123, 456]);
pagination2.data; // number[]
pagination2.message; // unknown
pagination2.lastFetchedAt; // Data | undefined

class DefaultGeneric<T = boolean> {
  data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data = [true, false, false];
