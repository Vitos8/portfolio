import React from 'react';
import Icons from "./components/Icons/icons";
import ArrowSvg from './components/BtnScrollUp/BtnScrollUp';
import BgAnimation from "./components/BgAnimation/BgAnimation.jsx";
import CloseSvg from "./assets/img/close.svg";
import {About, Header, Projects, Skills, Contacts} from './pages/index';
import AOS from 'aos';
import "./assets/aos/dist/aos.css";

function App() {
    const [burger, setBurger ] = React.useState(false);
    
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className=" h-full  relative ">
            <ArrowSvg/>
            <div className="container">
                <Header isBurger={()=> setBurger(true)}/>
                <div className="realtive">
                    <BgAnimation/>
                </div>
                <div data-aos="fade-left"   data-aos-duration="2000" className="mt-[150px] pb-[280px] xs:pb-[170px] ">
                    <h1   className='font-bold text-blue text-xl mb-7 xm:text-[50px] xs:text-[37px] xxs:text-[30px] dark:text-darkPurlpe'>Vitalik Golubovich</h1>
                    <p className="text-black font-bold text-lg mb-5 xm:text-[22px] xs:text-[19px] xxs:text-[15px] dark:text-darkLightPurlpe">Junior Frontend Developer</p>
                    <Icons/>
                </div>
                <About/>
                <Projects/>
                <Skills/>
                <Contacts/>
                <footer className='flex flex-col justify-center items-center py-[50px] dark:text-darkLightPurlpe'>
                    <Icons/>
                    <div className="link mt-5 mb-1 line cursor-pointer">Created by Vitalik Golubovich</div>
                    <p className="">Copyright © 2022</p>
                </footer>
            </div>
            <div className={`fixed  w-full bg-white top-0 text-center z-1 h-screen ${burger ? 'top-0' : 'top-[-100vh]'} transition-all`}>
                    <div className="flex justify-end mr-4 mt-7">
                        <img onClick={() => setBurger(false)} className='w-8 ' src={CloseSvg} alt="close"/>
                    </div>
                    <nav className="flex flex-col items-center gap-9 mt-20">
                        <a href="#about" onClick={() => setBurger(false)} className="text-[25px] text-black line font-bold">About</a>
                        <a href="#projects" onClick={() => setBurger(false)} className="text-[25px] text-black line font-bold">Projects</a>
                        <a href="#skills" onClick={() => setBurger(false)} className="text-[25px] text-black  line font-bold">Skills</a>
                        <a href="#contacts" onClick={() => setBurger(false)} className="text-[25px] text-black  line font-bold">Contacts</a>
                    </nav>  
            </div>
        </div>
    );
}

export default App;
