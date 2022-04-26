import React from 'react'
import Button from '../UI/Button/Button';
import s from './Card.module.sass'

export default function Card(props) {
    console.log(props)
    const {id, title} = props.data;
    const {background} = props.className
  return (
    <div className={s.card}>
        <p>{title}</p>
        <Button/>
    </div>
  )
}
