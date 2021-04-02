import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./pages/Routes";
import { store } from "./store";
import { Provider } from "react-redux";

interface Props {}

export const App: React.FC<Props> = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
