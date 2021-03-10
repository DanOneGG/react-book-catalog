import block from 'bem-cn'
import React from 'react'
import './QuestionType.css'

const b = block('question-type')

export const QuestionType = ({text}) =>
  <div className={b()}>
    {text}
  </div>

