import React from "react";
import s from './ThisDay.module.scss'

interface Props {

}

export const ThisDay = (props: Props) => {
 
    return (
        <header className={s.this_day}>
          <div className={s.top_block}>
            <div className={s.this_temp}>20</div>
            <div className={s.this_day_day}>сегодня</div>
          </div>
          <div className={s.bottom_block}>
            <div className={s.this_time}>
              Время: <span>21:54</span>
            </div>

            <div className={s.this_city}>
              Время: <span>Москва</span>
            </div>
          </div>
        </header>
    )
}