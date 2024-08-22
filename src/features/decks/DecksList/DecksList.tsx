import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useGetDecksHooks } from './useGetDecksHooks.ts'

export const DecksList = () => {
  const { decks } = useGetDecksHooks()
  return <ul className={s.list}>{
    decks.map((e) => {
      return (
        <DeckItem key={e.id} deck={e} />
      )
    })
  }</ul>
}
