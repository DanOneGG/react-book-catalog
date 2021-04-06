import block from "bem-cn";
import React from "react";
import "./RegisterPage.css";
import { RegisterForm } from "../../components/Forms/RegisterForm/RegisterForm";

interface Props {}

const b = block("auth-page");

export const RegisterPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <RegisterForm />
    </div>
  );
};
