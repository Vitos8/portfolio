import React from 'react';
import burgerSvg from "../../assets/img/burger.svg";
import DarkMode from './dark-mode/DarkMode';

export default function Header({isBurger}) {
     return (
          <>
          <header className='flex justify-between items-center py-7' >
               <p className="text-blue font-bold text-[25px] cursor-pointer line">V.Golubovich</p>
               <nav className="flex gap-9 base:hidden items-center ">
                    <a href="#about" className="text base text-black line font-bold  dark:text-darkLightPurlpe ">About</a>
                    <a href="#projects" className="text base text-black line font-bold dark:text-darkLightPurlpe">Projects</a>
                    <a href="#skills" className="text base text-black  line font-bold dark:text-darkLightPurlpe">Skills</a>
                    <a href="#contacts" className="text base text-black  line font-bold dark:text-darkLightPurlpe">Contacts</a>
                    <DarkMode/>
               </nav>
               <img onClick={isBurger} className='w-8 hidden base:block ' src={burgerSvg} alt="burger" />
          </header>
          </>
     )
}
