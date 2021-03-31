import block from "bem-cn";
import React from "react";
import "./AuthPage.css";
import { AuthForm } from "../../components/Forms/AuthForm/AuthForm";

interface Props {}

const b = block("auth-page");

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <AuthForm />
    </div>
  );
};
