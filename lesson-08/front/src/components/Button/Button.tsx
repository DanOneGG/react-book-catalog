import block from "bem-cn";
import React from "react";
import "./Button.css";
import { emptyFunction } from "../../utils";
import { BaseComponentProps } from "../../types/base";

interface Props extends BaseComponentProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  htmlType?: "submit" | "reset" | "button";
  outlined?: boolean;
}

const b = block("button");

export const Button: React.FC<Props> = ({
  className = "",
  text,
  onClick = emptyFunction,
  disabled = false,
  htmlType = "button",
  outlined = false,
}) => {
  return (
    <button className={b({ outlined }).mix(className)} onClick={onClick} disabled={disabled} type={htmlType}>
      <span>{text}</span>
    </button>
  );
};
