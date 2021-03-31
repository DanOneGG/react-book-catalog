import block from "bem-cn";
import React from "react";
import "./LanguagesPage.css";

interface Props {}

const b = block("languages-page");

export const LanguagesPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Языки</h1>
    </div>
  );
};
