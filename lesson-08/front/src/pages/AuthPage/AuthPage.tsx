import block from 'bem-cn'
import React from 'react'
import './AuthPage.css'

interface Props {
}

const b = block('auth-page')

export const AuthPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      Форма авторизации
    </div>
  )
}
