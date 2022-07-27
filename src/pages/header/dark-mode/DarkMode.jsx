import React from 'react'
import SunSvg from '../../../assets/img/sun.svg';
import MoonSvg from '../../../assets/img/moon.svg';


export default function DarkMode() {
     const [theme, setTheme] = React.useState(null);

     // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     // } else {
     // }

     let onLight= () => {
          setTheme('dark');
          document.body.style.backgroundColor = "#23283e";
          // localStorage.theme = 'dark';
          document.documentElement.classList.add('dark');

     };

     let onDark= () => {
          setTheme('light');
          document.body.style.backgroundColor = "#FFFF";
          // localStorage.theme = 'light';
          document.documentElement.classList.remove('dark');


     };



     return (
     <div className='flex '>
          {theme === null || theme === 'light' ? <img onClick={onLight} src={SunSvg} className='w-[30px] cursor-pointer hover:translate-y-[-3px] ' alt="sun"/>  : 
          <img onClick={onDark} src={MoonSvg} className='w-[30px] cursor-pointer hover:translate-y-[-3px] stroke-darkPurlpe' alt="moon"/>
          }
     </div>
     )
}
