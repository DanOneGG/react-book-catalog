import block from "bem-cn";
import React from "react";
import "./PublishersPage.css";

interface Props {}

const b = block("publishers-page");

export const PublishersPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Издательства</h1>
    </div>
  );
};
