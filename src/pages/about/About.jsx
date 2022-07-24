import React from 'react'
import Button from '../../components/Button/Button';

export default function About() {
     return (
          <div id='about' className='pt-[100px] pb-[200px] '>
               <div className="flex justify-between">
                    <img className='w-[350px] h-auto bg-black border rounded-lg' src="photo.png" alt="about" />
                    <div className="">
                         <h3 className="text-blue font-bold text-lg mb-10">About me</h3>
                         <p className="w-[500px] mb-20 leading-6"> I am a junior front-end developer and i'm open to new opportunities. Very quick to learn, hardworking and confident, honest and responsible, attention to detail and
great problem solving skills, positive attitude and energy , disciplined. For more details, open my resume below. </p>
                         <Button link={'https://drive.google.com/file/d/1W_5DiVJd1x33ffm1R7PCTlG4UhvaTOUo/view'} color={'blue'} bg={'black'} children={'Download CV'} />
                    </div>
               </div>
          </div>
     )
}
