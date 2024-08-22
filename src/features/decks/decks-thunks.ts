import { CreateDeckParams, decksAPI } from './decks-api.ts'
import { createDeckAC, getDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const getDecksTC = () => {
  return (dispatch: AppDispatch) => {
    decksAPI.getDecks().then((res) => {
      dispatch(getDecksAC(res.data.items))
    })
  }
}

export const createDeckTC = (params:CreateDeckParams)=>{
  return (dispatch: AppDispatch)=>{
    return decksAPI.createDeck(params).then((res)=>{
      dispatch(createDeckAC(res.data))
    })
  }
}