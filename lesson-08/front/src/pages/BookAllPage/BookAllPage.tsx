import block from "bem-cn";
import React from "react";
import "./BookAllPage.css";
import { BasePageProps } from "../../types/base";

interface Props extends BasePageProps {}

const b = block("book-all-page");

export const BookAllPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Книги</h1>
    </div>
  );
};
