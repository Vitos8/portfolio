import React from 'react';
import Button from '../../components/Button/Button';
import {projects} from "../../assets/data/mock";

export default function Projects() {
     return (
          <div id='projects' className='pt-[50px] pb-[100px] xs:pb-[20px]'>
               <h3 className="text-blue font-bold text-lg  text-center mb-20 base:text-[30px] dark:text-darkPurlpe">Projects</h3>
               <div className="flex justify-between gap-2 items-center flex-wrap lg:justify-center">
               {projects && projects.map((project, index) => (
                    <div data-aos-duration="1500" data-aos={`zoom-in`} key={index} className="flex flex-col  items-center p-6 rounded-xl card mb-9 xs:p-3 dark:bg-darkBgCard ">
                         <img className='max-w-[400px] max-h-[356px] rounded xs:max-w-[320px] xs:h-auto xxs:w-full' src={project.src} alt="project_image" />
                         <h5 className='mt-5 font-bold text-[30px] xs:text-[25px] dark:text-darkPurlpe'>{project.title}</h5>
                         <ul className='flex my-5 gap-5 max-w-[350px] flex-wrap justify-center'>
                              {project.stack.map((tech, index) => (
                                   <li key={index} className='p-2 bg-white rounded cursor-pointer hover:opacity-[0.6] xxs:text-xs  dark:bg-darkLightPurlpe '>{tech}</li>
                              ))}
                         </ul>
                         <div className="flex gap-10 ">
                              <Button link={project.code} color={'blue'} children={'Code'} />
                              <Button link={project.site}  color={'blue'} children={'Site'} display={`${project.display}`} />
                         </div>
                    </div>
               ))}
               </div>
          </div>
     )
}
