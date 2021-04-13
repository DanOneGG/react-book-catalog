import block from "bem-cn";
import React, { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useState } from "react";
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
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

const b = block("input");

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className = "",
      label = "",
      value = "",
      defaultValue = "",
      htmlType = InputType.Text,
      name,
      onChange = emptyFunction,
      onFocus = emptyFunction,
      onBlur = emptyFunction,
      onKeyDown = emptyFunction,
      onPressEnter = emptyFunction,
      error = "",
      placeholder = "",
      disabled = false,
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState<string>(defaultValue);

    const handlerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      event.preventDefault();
      setCurrentValue(event.target.value);
      onChange(event);
    };

    const handlerFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      event.preventDefault();
      onFocus(event);
    };

    const handlerBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      event.preventDefault();
      onBlur(event);
    };

    const handlerKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      if (["Enter", "NumpadEnter"].includes(event.code)) {
        onPressEnter(event);
      }
      onKeyDown(event);
    };

    React.useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    return (
      <div className={className}>
        <input
          ref={ref}
          className={b({ error: !!error })}
          value={currentValue}
          onChange={handlerChange}
          onFocus={handlerFocus}
          onBlur={handlerBlur}
          onKeyDown={handlerKeyDown}
          type={htmlType}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        />
        {!!error && <p className={b("error")}>{error}</p>}
      </div>
    );
  }
);
