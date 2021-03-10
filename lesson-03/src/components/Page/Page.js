import React from 'react';
import './Page.css'
import {block} from "bem-cn";

const b = block('page')

export const Page = () => {
  return (
    <div className={b()}>
      <div className={b('header')}>
        <div className={b('title')}>Страница 1</div>
      </div>
      <div className={b('drop-place')}>
        <div className={b('drop-place-shape')}>Добавьте сюда вопросы формы</div>
      </div>
    </div>
  );
};
