import block from "bem-cn";
import React from "react";
import "./Input.css";
import { emptyFunction } from "../../utils";
import { InputType } from "./InputType";
import { BaseComponentProps } from "../../types/base";

interface Props extends BaseComponentProps {
  label?: string;
  defaultValue?: string;
  value?: string;
  name: string;
  htmlType?: InputType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

const b = block("input");

export const Input: React.FC<Props> = ({
  className = "",
  label = "",
  value = "",
  defaultValue = "",
  htmlType = InputType.Text,
  name,
  onChange = emptyFunction,
  error = "",
  placeholder = "",
  disabled = false,
}) => {
  const [currentValue, setCurrentValue] = React.useState<string>(defaultValue);

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setCurrentValue(event.target.value);
    onChange(event);
  };

  React.useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className={className}>
      <input
        className={b()}
        value={currentValue}
        onChange={handlerChange}
        type={htmlType}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {!!error && <p className={b("error")}>{error}</p>}
    </div>
  );
};
