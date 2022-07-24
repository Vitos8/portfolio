import React from 'react';
import burgerSvg from "../../assets/img/burger.svg";

export default function Header({isBurger}) {
     return (
          <>
          <header className='flex justify-between items-center py-7' >
               <p className="text-blue font-bold text-[25px] cursor-pointer line">V.Golubovich</p>
               <nav className="flex gap-9 base:hidden ">
                    <a href="#about" className="text base text-black line font-bold  ">About</a>
                    <a href="#projects" className="text base text-black line font-bold">Projects</a>
                    <a href="#skills" className="text base text-black  line font-bold">Skills</a>
                    <a href="#contacts" className="text base text-black  line font-bold">Contacts</a>
               </nav>
               <img onClick={isBurger} className='w-8 hidden base:block ' src={burgerSvg} alt="burger" />
          </header>
          </>
     )
}
