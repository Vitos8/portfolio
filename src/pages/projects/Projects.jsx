import React from 'react';
import Button from '../../components/Button/Button';
import {projects} from "../../assets/data/mock-projects";

export default function Projects() {
     return (
          <div id='projects' className='pt-[50px] pb-[100px]'>
               <h3 className="text-blue font-bold text-lg  text-center mb-20">Projects</h3>
               <div className="flex justify-between gap-2 items-center flex-wrap">
               {projects && projects.map((project, index) => (
                    <div key={index} className="flex flex-col  items-center p-6 rounded-xl hover:translate-y-[-15px]	 card mb-9">
                         <img className='max-w-[400px] max-h-[356px] rounded' src={project.src} alt="project_image" />
                         <h5 className='mt-5 font-bold text-[30px] '>{project.title}</h5>
                         <ul className='flex my-5 gap-5 max-w-[350px] flex-wrap justify-center'>
                              {project.stack.map((tech, index) => (
                                   <li key={index} className='p-2 bg-white rounded'>{tech}</li>
                              ))}
                         </ul>
                         <div className="flex gap-10">
                              <Button link={project.code} color={'blue'} children={'Code'} />
                              <Button link={project.site}  color={'blue'} children={'Site'}/>
                         </div>
                    </div>
               ))}
               </div>
          </div>
     )
}
