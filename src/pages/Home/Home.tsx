import React, { useEffect } from 'react';
import { useCustomDispatch } from '../../hooks/store';
import { fetchCurrentWheather } from '../../store/thunks/fetchCurrentWheather';
import { ThisDay } from './components/ThisDay/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo/ThisDayInfo';
import { Days } from './Days/Days';

import s from './Home.module.scss';

interface Props {}

export const Home = (props: Props) => {
const dispatch = useCustomDispatch();
useEffect (()=>{
  dispatch(fetchCurrentWheather('paris'))
}, []);

  return ( 

  <div className={s.home}>
    <div className={s.wrapper}>
    <ThisDay />
    <ThisDayInfo />
    </div>
    <Days />
  </div>

  )
};

