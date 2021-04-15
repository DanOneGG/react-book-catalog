import block from "bem-cn";
import React from "react";
import "./AboutPage.css";
import { BasePageProps } from "../../types/base";

interface Props extends BasePageProps {}

const b = block("about-page");

export const AboutPage: React.FC<Props> = () => {
  return <div className={b()}>About</div>;
};
