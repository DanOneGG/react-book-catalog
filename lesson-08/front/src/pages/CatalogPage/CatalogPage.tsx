import block from "bem-cn";
import React from "react";
import { Card } from "../../components/Card/Card";
import { BasePageProps } from "../../types/base";
import "./CatalogPage.css";

interface Props extends BasePageProps {}

const b = block("catalog-page");

export const CatalogPage: React.FC<Props> = ({ match }) => {
  return (
    <Card title={"Каталог"} className={b()}>
      {/*<Select<User>*/}
      {/*  data={users}*/}
      {/*  renderValue={item => `${item.id}`}*/}
      {/*  renderLabel={item => item.name + ' ' + item.age}*/}
      {/*/>*/}
    </Card>
  );
};
