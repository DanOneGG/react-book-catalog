import block from "bem-cn";
import React from "react";
import "./GenreAllPage.css";

interface Props {}

const b = block("genre-all-page");

export const GenreAllPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Жанры</h1>
    </div>
  );
};
