import block from 'bem-cn'
import React from 'react'
import './AboutPage.css'

interface Props {
}

const b = block('about-page')

export const AboutPage: React.FC<Props> = () => {
  return (
    <div className={b()}>
      About
    </div>
  )
}
