import block from "bem-cn";
import React from "react";
import "./RegistrationPage.css";
import { RegistrationForm } from "../../components/Forms/RegistrationForm/RegistrationForm";

interface Props {}

const b = block("auth-page");

export const RegistrationPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <RegistrationForm />
    </div>
  );
};
