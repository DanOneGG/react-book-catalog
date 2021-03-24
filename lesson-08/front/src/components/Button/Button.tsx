import block from 'bem-cn'
import React from 'react'
import './Button.css'

interface Props {
  text: string,
  // onClick: R
  outlined?: boolean
}

const b = block('button')

export const Button: React.FC<Props> = ({text, outlined = false}) => {
  let className: string = b()

  if (outlined) {
    className = `${className}  ${b('outlined')}`
  }

  return (<button className={className}>
    {text}
  </button>)
}
