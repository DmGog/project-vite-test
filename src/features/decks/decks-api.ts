import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

type GetDecksResponseType = {
  items: ItemsType[],
  pagination: PaginatorType
}

export type ItemsType = {
  isFavorite: boolean,
  author: AuthorType,
  id: string,
  userId: string,
  name: string,
  isPrivate: boolean,
  cover: string,
  created: string,
  'updated': string,
  cardsCount: number
}

type PaginatorType = {
  currentPage: number,
  itemsPerPage: number,
  totalPages: number,
  totalItems: number
}

type AuthorType = {
  id: string,
  name: string
}


export const decksAPI = {
  getDecks() {
    return instance.get<GetDecksResponseType>('/v2/decks')
  },
  createDeck(params: CreateDeckParams) {
    return instance.post<ItemsType>('/v1/decks', params)
  },
}

export type CreateDeckParams = {
  name: string
}