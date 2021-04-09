import block from "bem-cn";
import React from "react";
import "./RegistrationPage.css";
import { RegistrationForm } from "../../components/Forms/RegistrationForm/RegistrationForm";
import {BasePageProps} from "../../types/base";

interface Props extends BasePageProps {}

const b = block("auth-page");

export const RegistrationPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <RegistrationForm />
    </div>
  );
};
