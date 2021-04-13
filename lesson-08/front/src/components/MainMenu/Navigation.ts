import { Navigation } from './types'

export const navigation: Navigation[] = [
  {
    path: '/catalog',
    text: 'Каталог'
  },
  {
    path: '/ref',
    text: 'Справочники',
    child: [
      {
        path: '/ref/languages',
        text: 'Языки'
      },
      {
        path: '/ref/publishers',
        text: 'Издательства'
      },
      {
        path: '/ref/genres',
        text: 'Жанры'
      },
      {
        path: '/ref/authors',
        text: 'Авторы'
      }
    ]
  }
]
