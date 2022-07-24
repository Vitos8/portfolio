import React from 'react';
import Icons from "./components/Icons/icons";
import BgAnimation from "./components/BgAnimation/BgAnimation.jsx";
import CloseSvg from "./assets/img/close.svg";
import {About, Header, Projects, Skills, Contacts} from './pages/index';

function App() {
    const [burger, setBurger ] = React.useState(false);

    return (
        <div className=" h-full  relative">
            <div className="container">
                <Header isBurger={()=> setBurger(true)}/>
                <div className="realtive">
                    <BgAnimation/>
                </div>
                <div className="mt-[150px] pb-[280px]">
                    <h1 className='font-bold text-blue text-xl mb-7'>Vitalik Golubovich</h1>
                    <p className="text-black font-bold text-lg mb-5">Junior Frontend Developer</p>
                    <Icons/>
                </div>
                <About/>
                <Projects/>
                <Skills/>
                <Contacts/>
                <footer className='flex flex-col justify-center items-center py-[50px]'>
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
                        <a href="#about" className="text-[25px] text-black line font-bold">About</a>
                        <a href="#projects" className="text-[25px] text-black line font-bold">Projects</a>
                        <a href="#skills" className="text-[25px] text-black  line font-bold">Skills</a>
                        <a href="#contacts" className="text-[25px] text-black  line font-bold">Contacts</a>
                    </nav>  
            </div>
        </div>
    );
}

export default App;
