import block from "bem-cn";
import React from "react";
import "./Header.css";
import {BaseComponentProps} from "../../types/base";

interface Props extends BaseComponentProps {
  right?: () => React.ReactNode;
  children?: React.ReactNode;
}

const b = block("header");

export const Header: React.FC<Props> = ({ className = '', children , right}) => (
  <header className={b()}>
    <a className={b("title")} href={"/"}>
      Каталог
    </a>
    {children}
    {!!right && right()}
  </header>
);
