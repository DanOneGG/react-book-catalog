import { ThunkAction } from "redux-thunk";
import { RootState } from "../store/types";

export interface BaseComponentProps {
  className?: string;
}

export type Thunk<T = void> = (params: T) => ThunkAction<Promise<void> | void, RootState.State, {}, any> | void;
