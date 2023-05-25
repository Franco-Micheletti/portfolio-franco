import React,{useState} from "react";
export const Myinfo = () => {

    const [showInfo, setShowInfo] = useState(true)

    return (
        <div>
            { 
                showInfo
                    ?   <div style={{backgroundColor:"#E7E7E7"}} className="ease-in duration-75 shadow-2xl justity-center gap-1 flex flex-col font-bold font-sans text-center text-1xl w-80 h-screen overflow-hidden">
                            <div className="w-72 flex gap-5 mb-5 mt-5 justify-end items-center">
                                <div className="w-54">Welcome to my portfolio</div>
                                <div onClick={() => setShowInfo(false)} className=" hover:bg-slate-300 rounded-md cursor-pointer p-1.5 border-zinc-700 border-2"> 
                                    <svg height={20} width={20} fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M114.063 276v1368.756H0V276h114.063Zm739.106 73.765 80.642 80.642-473.02 473.02H1920v113.948H460.792l473.02 473.02-80.643 80.642-610.694-610.693 610.694-610.58Z" fill-rule="evenodd"></path> </g></svg>
                                </div>
                            </div>
                            <div className="min-w-max min-h-max flex content-center ml-auto mr-auto rounded-full w-auto h-auto border-0">
                                <img className="rounded-3xl" width={189} height={297} src={`./images/2.png`}></img>
                            </div>
                            <div className="flex-col w-64 p-6 font-medium flex flex-wrap justify-start gap-3">
                                <div className="flex gap-3">Franco Micheletti - FullStack Developer</div>
                                <div className="flex gap-3">Sites: 
                                    <a href="https://www.linkedin.com/in/franco-micheletti-62a9901b7/"><img className="rounded-sm" width="24" height="24" alt="linkedin-link" src="/images/linkedin.webp"></img></a>
                                    <a href="https://github.com/Franco-Micheletti/">                   <img className=" rounded-lg" width="24" height="24" alt="github-link" src="/images/github.webp"></img></a>
                                </div> 
                            </div>
                            <div className="ml-6 mb-5 font-medium flex flex-wrap justify-start">Programming languages</div>
                            <div className="flex flex-col flex-wrap">
                                <div className="justify-start gap-3 ml-9 flex">Frontend: <div className="font-medium">Javascript</div> </div> 
                                <div className="justify-start gap-4 ml-9 flex">Backend:  <div className="font-medium">Python</div>     </div>
                            </div>
                            <audio controls className="mt-5 ml-1">
                                <source src="/audio/audio.mp3" type="audio/mpeg"/>
                            </audio>
                        </div>

                    :   <div style={{backgroundColor:"#E7E7E7"}} className="items-center shadow-2xl justity-center gap-1 flex flex-col font-bold font-sans text-center text-1xl w-11 h-screen overflow-hidden">
                            <div onClick={() => setShowInfo(true)} className="hover:bg-slate-300 mt-1 h-9 w-9 rounded-md cursor-pointer p-1.5 border-zinc-700 border-2">
                                <svg height={20} width={20} fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1805.937 276v1368.756H1920V276h-114.063Zm-739.106 73.765-80.642 80.642 473.02 473.02H0v113.948h1459.208l-473.02 473.02 80.643 80.642 610.694-610.693-610.694-610.58Z" fill-rule="evenodd"></path> </g></svg>
                            </div>
                        </div>
                
            }
            
        </div>
    )
}