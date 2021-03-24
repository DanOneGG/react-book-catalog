import block from 'bem-cn'
import React from 'react'
import './AuthPage.css'
import {Button} from "../../components/Button/Button";

interface Props {
}

const b = block('auth-page')

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      <form className={b('form')}>
        <h1>Авторизация</h1>
        <h3>Логин</h3>
        <input type="text"/>
        <h3>Пароль</h3>
        <input type="text"/>
        <Button text='Войти'/>
        <Button outlined text='Зарегистрироваться'/>
      </form>
    </div>
  )
}
