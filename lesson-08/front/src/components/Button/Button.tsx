import block from "bem-cn";
import React from "react";
import "./Button.css";

interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  outlined?: boolean;
}

const b = block("button");

export const Button: React.FC<Props> = ({ text, onClick, outlined = false }) => {
  let className: string = b();

  if (outlined) {
    className = b({ outlined });
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
