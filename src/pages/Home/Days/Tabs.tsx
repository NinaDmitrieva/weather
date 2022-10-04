import React from 'react';
import s from './Days.module.scss';

interface Props {}

export interface Tabs{
  value: string,
}

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: 'На неделе',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    }
  ];

  return ( 
<>
  <div className={s.tabs}>
    <div className={s.tabs_wrapper}>
      {tabs.map(tab => (
        <div className={s.tab + ' ' +s.activ} key={tab.value}>
          {tab.value}
        </div>
      ))}
    </div>
    <div className={s.cancel}>Отменить</div>
  </div>
</>
  )
};

