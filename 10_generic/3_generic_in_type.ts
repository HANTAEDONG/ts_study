/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = "hello"; // const genericString: string
// const genericString2: GenericSimpleType = "123"; // 제네릭 생략하여 자동 유추 불가

interface DoneState<T> {
  data: T[];
}

interface LoadingState {
  requestedAt: Date;
}

interface ErrorState {
  error: string;
}

type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
  //   data: ["hello", "hi"],
  requestedAt: new Date(),
};
