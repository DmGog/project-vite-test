import {ItemsType } from './decks-api.ts'

const initialState = {
  decks: [] as ItemsType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return { ...state, decks: action.decks }
    }
    case 'CREATE-DECK':{
      const deck = action.deck
      return {...state, decks: [deck,...state.decks]}
    }
    default:
      return state
  }
}

type DecksActions = GetDecksAT|CreateDeckAC

type GetDecksAT = ReturnType<typeof getDecksAC>
type CreateDeckAC = ReturnType<typeof createDeckAC>
export const getDecksAC = (decks: ItemsType[]) => (
  { type: 'SET-DECKS', decks } as const
)

export const createDeckAC = (deck: ItemsType) => (
  { type: 'CREATE-DECK', deck } as const
)