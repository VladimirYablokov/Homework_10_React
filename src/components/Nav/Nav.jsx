import React from 'react'
import s from './Nav.module.sass'
import logo from './logo.png'
import Button from '../UI/Button/Button'

export default function Nav() {
  return (
    <nav className={s.nav}>
        <img src={logo} alt="Logo" />
        <ul>
            <li>
                <a href="#"><div>О нас</div></a>
            </li>
            <li>
                <a href="#"><div>Услуги</div></a>
            </li>
            <li>
                <a href="#"><div>Аренда</div></a>
            </li>
        </ul>
        <Button />
    </nav>
  )
}
