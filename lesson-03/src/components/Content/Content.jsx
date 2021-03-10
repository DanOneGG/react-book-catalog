import block from 'bem-cn'
import React from 'react'
import './Content.css'
import {FormCreate} from "../FormCreate/FormCreate";

const b = block('content')

export const Content = () => (
  <div className={b()}>
    <div className={b('header')}>
      <span className={b('title')}>
        Новая форма
      </span>
    </div>
    <FormCreate/>
  </div>
)
