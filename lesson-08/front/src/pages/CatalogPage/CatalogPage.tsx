import block from "bem-cn";
import React from "react";
import "./CatalogPage.css";
import {Select} from "../../components/Select/Select";

interface Props {}

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserTest {
  id: number;
  email: string;
  num: number;
}

const users: User[] = [
  {
    id: 1,
    name: 'Name 1',
    age: 20
  },
  {
    id: 2,
    name: 'Name 2',
    age: 30
  }
]

const b = block("catalog-page");

export const CatalogPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <h1>Каталог</h1>
      <Select<User>
        data={users}
        renderValue={item => `${item.id}`}
        renderLabel={item => item.name + ' ' + item.age}
      />
    </div>
  );
};
