import block from "bem-cn";
import React from "react";
import "./CatalogPage.css";
import { ToggleButton } from "../../components/ToggleButton/ToggleButton";

interface Props {}

const b = block("catalog-page");

export const CatalogPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Каталог
      <ToggleButton />
    </div>
  );
};
