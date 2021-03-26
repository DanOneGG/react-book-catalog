import { App } from "../../types/app";
import { AppAction } from "./appAction";
import { AppState } from "./types";

export const appFetch = (): AppState.Action.Fetch => ({
  type: AppAction.Fetch,
});

export const appFetchSuccess = (payload: App.Token): AppState.Action.FetchSuccess => ({
  type: AppAction.FetchSuccess,
  payload,
});

export const appFetchError = (payload: string): AppState.Action.FetchError => ({
  type: AppAction.FetchError,
  payload,
});
