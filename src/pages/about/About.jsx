import React from 'react'
import Button from '../../components/Button/Button';

export default function About() {
     return (
          <div id='about' className='pt-[100px] pb-[200px]  xs:pb-0 '>
               <div className="flex justify-between items-center lg:flex-col ">
                    <img data-aos='fade-down-right' data-aos-duration='2000'  className='lg:order-2 w-[350px] h-auto xs:w-full base:mr-0 bg-black border rounded-lg mr-[20px] ' src="photo.png" alt="about" />
                    <div className="lg:order-1 lg:mb-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
                         <h3 className="text-blue font-bold text-lg mb-10 base:text-[30px] dark:text-darkPurlpe">About me</h3>
                         <p className="w-[500px] mb-20 leading-6 base:w-full base:text-xs dark:text-darkLightPurlpe"> I am a front-end (react) developer  and i'm open to new opportunities. Very quick to learn, hardworking and confident, attention to detail and
great problem solving skills, positive attitude and energy , disciplined. I have a solid understanding of web
development principles and have demonstrated
proficiency in building responsive and user-friendly
interfaces using modern web technologies. For more details, open my resume below. </p>
                         <Button link={'https://cv.djinni.co/46/6daf6708c4b24436a296a83d36e803/VitaliyGolubovichCV.pdf-1.pdf'} color={'blue'} bg={'black'} children={'Download CV'} />
                    </div>
               </div>
          </div>
     )
}
