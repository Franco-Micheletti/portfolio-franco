import React,{useContext} from "react";
import '../css/myInfo.css'
import {MyInfoContext } from "../context/myInfoContext";
export const Myinfo = () => {

    const {showInfo,handleShowInfo} = useContext(MyInfoContext)

    const handleHideInfo = () => {
        
        if (showInfo === true) {handleShowInfo()}
    }
    return (
        <div>
            {/* Black Mask */}
            <div onMouseDown={() => handleHideInfo()}  className={`${showInfo?"visible":"hidden"} absolute z-1 w-full bg-black/50 flex h-full`}></div>
            {/* My Info */}
            <div style={{backgroundColor:"#fbfbfb"}} className={`${showInfo?"my-info-visible":"my-info-hidden"} z-50 text-lg text-black h-screen absolute min-h-full max-h-full justity-center items-center flex flex-col font-bold font-sans text-center text-1xl w-80 overflow-auto`}>
                <div className="w-full flex gap-5 mb-3 mt-3 justify-end pr-4">
                    <div onClick={() => handleShowInfo()} className="p-3 hover:bg-gray-200 hover:fill-black  fill-black bg-gray-100 rounded-full cursor-pointer"> 
                        <svg height={20} width={20} viewBox="0 0 1920 1920"><g><path d="M114.063 276v1368.756H0V276h114.063Zm739.106 73.765 80.642 80.642-473.02 473.02H1920v113.948H460.792l473.02 473.02-80.643 80.642-610.694-610.693 610.694-610.58Z" fillRule="evenodd"></path> </g></svg>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full p-4 gap-3">
                    <div className="min-w-max w-full font-medium text-2xl text-start text-black select-none">About Me</div>
                    <div className="bg-sky-800 w-4/5 h-1 rounded-2xl"></div>
                </div>
                <div className="gap-1 w-full flex rounded-full border-0 justify-around items-center p-4">
                    <div className="min-w-max min-h-max z-10 flex flex-col text-start gap-2">
                        <div className="font-medium text-base flex flex-col gap-4 items-start select-none">
                            <div className="min-w-max font-medium text-base">Franco Micheletti</div>
                            <div className="min-w-max font-medium text-base">Software Developer</div>
                            <a className="flex gap-2" href="https://www.linkedin.com/in/franco-micheletti-62a9901b7/">
                                <img className="rounded-sm" width="24" height="24" alt="linkedin-link" src="/images/linkedin.webp"></img>
                                LinkedIn
                            </a>
                            <a className="flex gap-2" href="https://github.com/Franco-Micheletti/">
                                <img className="rounded-lg" width="24" height="24" alt="github-link" src="/images/github.webp"></img>
                                Github
                            </a>
                        </div>
                    </div>
                    <div className="z-10"><img className="rounded-3xl" width={100} height={180} src={`./images/2.webp`} alt="My photo"></img></div>
                </div>
                <div className="flex flex-col items-start w-full p-4 gap-3">
                    <div className="min-w-max w-full font-medium text-2xl text-start text-black select-none">Skills</div>
                    <div className="bg-sky-800 w-4/5 h-1 rounded-2xl"></div>
                </div>
                <div style={{backgroundColor:"#fbfbfb"}} className="min-w-max flex flex-col gap-2 p-4 w-full">
                    <div className="min-w-max justify-start gap-5 flex w-full items-center">
                        <div className="bg-white rounded-md justify-center flex items-center">
                            <svg height={40} width={40} viewBox="0 0 48 48"><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>
                        </div>
                        <div className="font-medium text-base">Javascript</div>
                    </div> 
                    <div className="min-w-max justify-start gap-5 flex w-full items-center">
                        <div className="bg-white rounded-md justify-center flex items-center">
                            <svg className="bg-white rounded-md" height={40} width={40} viewBox="0 0 64 64" fill="none"><g><path d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" fill="url(#a)"></path><path d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z" fill="url(#b)"></path><defs><linearGradient id="a" x1="19.075" y1="18.782" x2="34.898" y2="34.658" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8"></stop><stop offset="1" stopColor="#366994"></stop></linearGradient><linearGradient id="b" x1="28.809" y1="28.882" x2="45.803" y2="45.163" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052"></stop><stop offset="1" stopColor="#FFC331"></stop></linearGradient></defs></g></svg>
                        </div>
                        <div className="font-medium text-base">Python</div>
                    </div>
                </div>
            </div>
        </div>
    )
}