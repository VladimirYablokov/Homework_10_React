import React from 'react'
import s from './Main_Post.module.sass'

export default function Main_Post() {
  return (
    <div className={s.Main_Post}>
        <p className={s.Main_Text}>
            Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями. А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.
        </p>
    </div>
  )
}
