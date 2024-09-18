/**
 * Key Value Mapping
 */

enum State {
  loading,
  done,
  error,
}

type GlobalApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginateUsers: State | undefined;
  banUser: State | null;
};

// 얕은 복사를 통해 변화하는 원래 타입의 키값을 추적할 수 있다.
type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginateUsers: GlobalApiStatus["paginateUsers"];
  banUser: GlobalApiStatus["banUser"];
};

// 중요!!!
type UserApiStatus3 = {
  [k in "getUser" | "paginateUsers" | "banUser"]: GlobalApiStatus[k];
};

// 다른 타입에서 특정 키만 가져올 때 쓰임
type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "banUser" | "paginateUsers"
>;
// 다른 키값 가져올 때 특정 키만 제거
type OmitUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/**
 * keyof
 */
// 특정 타입의 키 중 하나를 추출
type Allkeys = keyof GlobalApiStatus;
const key: Allkeys = "banUser";

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

// keyof로 가져온 모든 키 값중, getPosts 키값은 제외하고 가져옴
type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[k];
};

interface LoadingStatus {
  type: "loading";
  data: string[];
}

interface ErrorStatus {
  type: "error";
  message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;
type StatusType = FetchStatus;
["type"];
