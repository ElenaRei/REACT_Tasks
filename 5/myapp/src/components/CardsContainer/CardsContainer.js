import React from 'react'
import s from './CardsContainer.module.css'
import { words } from '../../data/words'
import Card from '../Card/Card'

export default function CardsContainer() {
  return (
    <div className={s.cards_container}>
        {
        words.map(el=> <Card key={el.id}{...el}/>)
}
</div>
  )
}
 