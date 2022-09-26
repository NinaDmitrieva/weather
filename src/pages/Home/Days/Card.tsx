import React from 'react';
import { Day } from './Days';
import s from './Days.module.scss';

interface Props {
    day: Day;
}

export const Card = ({day}: Props) => {
    //const {day, day_info, icon_id, temp_day, temp_night, info }=day;
  return ( <div className={s.card}>
    <div className={s.day}>{day.day}</div>
  </div>

  )
};