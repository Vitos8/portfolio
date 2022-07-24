import React from 'react'
import {progres} from '../../assets/data/mock-projects';

export default function Skills() {
     return (
          <div id='skills' className='py-[150px]'>
               <h1 className="font-bold text-blue text-lg text-center mb-20">Technologies</h1>
               {progres.map((item, index) => (
                    <div key={index} className="mt-5">
                         <div className="flex justify-between px-5 mb-1">
                              <p className="">{item.tech}</p>
                              <p className="">{item.name}</p>
                         </div>
                         <div class="w-full bg-gray-200 h-5 mb-6 rounded-[83px]">
                              <div class={`progress  h-5  rounded `} style={{width: `${item.level}`}} ></div>
                         </div>
                    </div>
               ))}
               <div className="mt-[133px]">
                    <h4 className='font-bold text-[30px] mb-10'>Additional technologies and skills</h4>
                    <ul className='flex justify-between items-center flex-wrap gap-10'>
                         <li className='marker text-bold '>Git / GitHub</li>
                         <li className='marker text-bold '>CI / CD, GitFlow</li>
                         <li className='marker text-bold '>B1 English</li>
                         <li className='marker text-bold '>Quick learning</li>
                         <li className='marker text-bold '>Firebase</li>
                    </ul>
               </div>
          </div>
     )
}
