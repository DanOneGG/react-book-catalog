import block from "bem-cn";
import React from "react";
import "./Header.css";

interface Props {
  children?: React.ReactNode;
}

const b = block("header");

export const Header: React.FC<Props> = ({ children }) => (
  <header className={b()}>
    <a className={b("title")} href={"/"}>
      Каталог
    </a>
    {children}
  </header>
);
