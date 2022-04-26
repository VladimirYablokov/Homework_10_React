import React from 'react'
import Card from '../Card/Card'
import Button from '../UI/Button/Button'
import s from './Cards.module.sass'

export default function Cards() {
  return (
    <div className={s.cards}>
        <Card className='firstCard' data={{
            id:1,
            title: 'Годовое ТО'}}
        />
        <Card className='secondCard' data={{
            id:2,
            title: 'Выравнивание колес'}}
        />
        <Card className='thirdCard' data={{
            id:3,
            title: 'Настройка переключателей'}}
        />        
    </div>
  )
}
