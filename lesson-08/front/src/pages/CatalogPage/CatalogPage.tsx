import block from 'bem-cn'
import React from 'react'
import { Card } from '../../components/Card/Card'
import { BasePageProps } from '../../types/base'
import './CatalogPage.css'

interface Props extends BasePageProps {
}

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserTest {
  id: number;
  email: string;
  num: number;
}

const users: User[] = [
  {
    id: 1,
    name: 'Name 1',
    age: 20
  },
  {
    id: 2,
    name: 'Name 2',
    age: 30
  }
]

const b = block('catalog-page')

export const CatalogPage: React.FC<Props> = ({ match }) => {
  return (
    <div className={b()}>
      <Card title={'Каталог'}>
        {/*<Select<User>*/}
        {/*  data={users}*/}
        {/*  renderValue={item => `${item.id}`}*/}
        {/*  renderLabel={item => item.name + ' ' + item.age}*/}
        {/*/>*/}
      </Card>
    </div>
  )
}
