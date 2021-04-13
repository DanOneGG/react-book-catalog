import block from "bem-cn";
import React from "react";
import "./AuthorAllPage.css";
import { BasePageProps } from "../../types/base";

interface Props extends BasePageProps {}

const b = block("author-all-page");

export const AuthorAllPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Авторы</h1>
    </div>
  );
};
