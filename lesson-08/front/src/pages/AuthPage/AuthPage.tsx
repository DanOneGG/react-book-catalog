import block from "bem-cn";
import React from "react";
import "./AuthPage.css";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

interface Props {}

const b = block("auth-page");

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <form className={b("form")}>
        <h1>Авторизация</h1>
        <h3>Логин</h3>
        <Input type="login" placeholder="Введите логин" />
        <h3>Пароль</h3>
        <Input type="password" placeholder="Введите пароль" />
        <Button text="Войти" onClick={() => console.log("test")} />
        <Button outlined text="Зарегистрироваться" onClick={() => console.log("test 1")} />
      </form>
    </div>
  );
};
