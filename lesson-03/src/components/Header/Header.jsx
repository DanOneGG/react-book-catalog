import block from 'bem-cn'
import React from 'react'
import './Header.css'

const b = block('header')

export const Header = () => (
  <header className={b()}>
    <span className={b('title')}>
      Application title
    </span>
  </header>
)
