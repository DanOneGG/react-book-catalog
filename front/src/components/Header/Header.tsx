import block from "bem-cn";
import React from "react";
import "./Header.css";
import { BaseComponentProps } from "../../types/base";

interface Props extends BaseComponentProps {
  right?: () => React.ReactNode;
  children?: React.ReactNode;
}

const b = block("header");

export const Header: React.FC<Props> = ({ className = "", children, right }) => (
  <header className={b()}>
    <div>
      <a className={b("title")} href={"/"}>
        Каталог
      </a>
      {children}
    </div>
    <div>{!!right && right()}</div>
  </header>
);
