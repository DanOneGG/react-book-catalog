import React from 'react';
import './Footer.css'
import block from "bem-cn";

const b = block('footer')

export const Footer = () => {
  return (
    <div className={b()}>
      <div className={b('row')}>
        <div className={b('link')}>
          Обратная связь
        </div>
        <div className={b('link')}>
          Справка
        </div>
        <div className={b('space')}/>
        <div className={b('link')}>
          Условия использования
        </div>
      </div>
    </div>
  );
};
