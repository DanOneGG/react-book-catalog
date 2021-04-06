import React from "react";
import { Router } from "react-router-dom";
import { Routes } from "./pages/Routes";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { browserHistory } from "./browserHistory";

interface Props {}

export const App: React.FC<Props> = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);
