import React from 'react'
import s from './Main.module.sass'
import image from './image.png'

export default function Main() {
  return (
    <div className={s.main}>
      <div>
        
      </div>
      <div className={s.main_text}>
        <h2>Что мы предлагаем</h2>
        <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
      </div>
      <img src={image} alt="" />
    </div>
  )
}
