import React from 'react'
import {progres} from '../../assets/data/mock';

export default function Skills() {
     return (
          <div id='skills' className='py-[150px] xs:pb-[80px]'>
               <h1 className="font-bold text-blue text-lg text-center mb-20 xs:text-[30px] dark:text-darkPurlpe">Technologies</h1>
               {progres &&  progres.map((item, index) => (
                    <div data-aos-duration="3000" data-aos="flip-left" data-aos-easing="ease-out-cubic" key={index} className="mt-5">
                         <div className="flex justify-between px-5 mb-1 xs:text-[13px] xxs:text-[11px]">
                              <p className="dark:text-darkLightPurlpe">{item.tech}</p>
                              <p className="dark:text-darkLightPurlpe">{item.name}</p>
                         </div>
                         <div class="w-full bg-gray-200 h-5 mb-6 rounded-[83px] xs:h-4 xxs:h-3 ">
                              <div class={`progress  h-5  rounded  xs:h-4 xxs:h-3`} style={{width: `${item.level}`}} ></div>
                         </div>
                    </div>
               ))}
               <div className="mt-[133px]">
                    <h4 className='font-bold text-[30px] mb-10 base:text-[24px] xs:text-[18px] xs:leading-5 dark:text-darkPurlpe' >Additional technologies and skills</h4>
                    <ul className='flex justify-between items-center flex-wrap gap-10 dark:text-darkLightPurlpe' >
                         <li className='marker text-bold xs:text-xs'>Git / GitHub</li>
                         <li className='marker text-bold xs:text-xs'>CI / CD, GitFlow</li>
                         <li className='marker text-bold xs:text-xs'>B1 English</li>
                         <li className='marker text-bold xs:text-xs'>Quick learning</li>
                         <li className='marker text-bold xs:text-xs'>Firebase</li>
                    </ul>
               </div>
          </div>
     )
}
