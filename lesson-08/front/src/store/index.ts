import { applyMiddleware, compose, createStore } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducer";
import { RootState } from "./types";
import { appClearError } from "./app/actions";

const config: PersistConfig<RootState.State> = {
  key: "catalog",
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk), window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export const persistor = persistStore(store, {}, async () => {
  const { dispatch } = store;
  dispatch(appClearError());
});
