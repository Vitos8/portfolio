import React from 'react';
import ArrowSvg from '../../assets/img/arrow.svg';

export default function BtnScrollUp() {

     let ScrollUp =() => {
               window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
               });
     };

     return (
          <div className='w-10 fixed right-[60px] bottom-[60px] lg:hidden z-10 cursor-pointer'>
               <img className='dark:stroke-darkPurlpe' onClick={ScrollUp}  src={ArrowSvg} alt="arrow"/>
          </div>
     )
}
