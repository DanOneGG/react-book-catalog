import block from "bem-cn";
import React from "react";
import "./AuthorsPage.css";

interface Props {}

const b = block("authors-page");

export const AuthorsPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Авторы</h1>
    </div>
  );
};
