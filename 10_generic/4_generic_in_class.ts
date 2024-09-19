/**
 * Class에서 Generic 사용하기
 */
class Pagination<Data, Message> {
  data: Data[] = [];
  message?: Message;
  lastFetchedAt?: Data;
}
