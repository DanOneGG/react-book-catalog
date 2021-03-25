import block from "bem-cn";
import React from "react";
import "./CatalogPage.css";

interface Props {}

const b = block("catalog-page");

export const CatalogPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Каталог</h1>
    </div>
  );
};
