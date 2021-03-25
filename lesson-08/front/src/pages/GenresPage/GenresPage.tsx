import block from "bem-cn";
import React from "react";
import "./GenresPage.css";

interface Props {}

const b = block("genres-page");

export const GenresPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Жанры</h1>
    </div>
  );
};
