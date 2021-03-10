import block from 'bem-cn'
import React from 'react'
import './Header.css'

const b = block('header')

export const Header = () => (
  <header className={b()}>
    <span className={b('title')}>
      Формы
    </span>
    <div className={b('left')}>
      <div className={b('menu-item')+' '+b('menu-item_active')}>
        Главная
      </div>
      <div className={b('menu-item')}>
        Мои формы
      </div>
    </div>
    <div className={b('right')}>
      <button className={b('btn')}>
        Создать форму
      </button>
    </div>
  </header>
)
