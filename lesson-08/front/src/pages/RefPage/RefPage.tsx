import block from "bem-cn";
import React from "react";
import "./RefPage.css";
import { BasePageProps } from "../../types/base";

interface Props extends BasePageProps {}

const b = block("ref-page");

export const RefPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Справочники</h1>
      <ul>
        <li>
          <a href={"ref/authors"}>Авторы</a>
        </li>
        <li>
          <a href={"ref/publishers"}>Издательства</a>
        </li>
        <li>
          <a href={"ref/genres"}>Жанры</a>
        </li>
        <li>
          <a href={"ref/languages"}>Языки</a>
        </li>
      </ul>
    </div>
  );
};
