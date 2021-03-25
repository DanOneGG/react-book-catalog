import block from "bem-cn";
import React from "react";
import "./Input.css";

interface Props {
  type: string;
  placeholder: string;
}

const b = block("input");

export const Input: React.FC<Props> = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} className={b()} />
);
