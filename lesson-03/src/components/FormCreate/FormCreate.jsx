import block from 'bem-cn'
import React from 'react'
import './FormCreate.css'
import {QuestionType} from "../QuestionType/QuestionType";
import {Page} from "../Page/Page";

const b = block('form-create')

export const FormCreate = () => (
  <div className={b()}>
    <div className={b('left-col')}>
      <QuestionType text='Короткий текст'/>
      <QuestionType text='Длинный текст'/>
      <QuestionType text='Текст без вопроса'/>
      <QuestionType text='Один вариант'/>
      <QuestionType text='Несколько вариантов'/>
      <QuestionType text='Выпадающий список'/>
    </div>
    <div className={b('right-col')}>
      <Page/>
    </div>
  </div>
)
