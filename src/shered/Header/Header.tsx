import React, { useEffect, useState } from "react";
import Select from "react-select";
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss'

interface Props {

}

export const Header = (props: Props) => {
  const options = [
   { value: 'city-1', label: 'Санкт-Петербург' },
   { value: 'city-2', label: 'Москва' },
   { value: 'city-3', label: 'Мурманск' }
  ];

  const [theme, setTheme] = useState('light');

  const colorStyles = {
    control: (styles:any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border:'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles:any) => ({
      ...styles,
     color: theme === 'dark'? '#fff' : '#000'
    })
  };


  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(()=>{
    const root = document.querySelector(':root') as HTMLElement;
   
    const components = [
      'text-color',
      'card-shadow',
      'card-background',
      'components-background',
      'body-background',
    
    ]

    components.forEach((component)=>{
          root.style.setProperty(
      `--${component}-default`, 
      `var(--${component}-${theme})`
      );
    })

  }, [theme]);

    return (
        <header className={s.header}>
          <div className= {s.wrapper}>
            <div className={s.logo}>
                <GlobalSvgSelector id='header-logo'/>
            </div> 
            <div className={s.title}>React weather</div> 
          </div>
          <div className= {s.wrapper}>
            <div className={s.change_theme} onClick={changeTheme}>
                  <GlobalSvgSelector id='change-theme'/> 
            </div>
             <Select defaultValue={options[1]} styles={colorStyles} options={options} />
          </div>
        </header>
    )
}