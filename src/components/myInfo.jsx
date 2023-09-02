import React,{useEffect, useState} from "react";
export const Myinfo = () => {

    const [showInfo, setShowInfo] = useState(false)

    useEffect(() => {

        setTimeout(()=>{
            setShowInfo(true)
        },1500)
        
    }, [])
    
    const handleShowInfo = () => {

        if (showInfo) {
            document.body.style.position = "static"
            setShowInfo(false)
            addEventListener("click",() => {
                
            })
        } else {
            document.body.style.position = "fixed"
            setShowInfo(true)
        }
            
    }

    return (
        <div>
            { 
                showInfo
                    ?   <div style={{boxShadow:"rgb(185 185 185) 6px 0px 19px -3px",backgroundColor:"rgb(39, 55, 77)"}} className="text-lg text-white bg-neutral-400 h-screen relative min-h-full max-h-full ease-in duration-75 justity-center gap-1 flex flex-col font-bold font-sans text-center text-1xl w-80 overflow-hidden">
                            <div className="w-72 flex gap-5 mb-5 mt-5 justify-end items-center">
                                <div className="w-54">Welcome to my portfolio</div>
                                <div onClick={() => setShowInfo(false)} className=" hover:bg-slate-500 rounded-md cursor-pointer p-1.5 border-gray-500 border-2"> 
                                    <svg height={20} width={20} fill="white" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M114.063 276v1368.756H0V276h114.063Zm739.106 73.765 80.642 80.642-473.02 473.02H1920v113.948H460.792l473.02 473.02-80.643 80.642-610.694-610.693 610.694-610.58Z" fill-rule="evenodd"></path> </g></svg>
                                </div>
                            </div>
                            <div style={{minWidth:"320px",maxWidth:"320px"}} className="min-w-max max-w-full min-h-max flex rounded-full w-auto h-auto border-0 justify-center">
                                <img className="rounded-3xl shadow-sm shadow-gray-500" width={140} height={220} src={`./images/2.webp`} alt="My photo"></img>
                            </div>
                            <div className="mt-6 flex-col w-64 pl-6 font-medium flex flex-wrap justify-start gap-3">
                                <div className="flex flex-col gap-3 mb-6">
                                    <div className="flex">Franco Micheletti  </div>
                                    <div className="flex">FullStack Developer</div>
                                </div>
                            </div>
                            <div className="pl-6 font-medium flex gap-3 items-center min-w-max max-w-max">Contact me: 
                                <a href="https://www.linkedin.com/in/franco-micheletti-62a9901b7/"><img className="rounded-sm" width="24" height="24" alt="linkedin-link" src="/images/linkedin.webp"></img></a>
                                <a href="https://github.com/Franco-Micheletti/">                   <img className=" rounded-lg" width="24" height="24" alt="github-link" src="/images/github.webp"></img></a>
                            </div> 
                            <div className="mb-5 font-medium flex justify-start w-full min-w-max max-w-xs min-h-6 max-h-6 p-6">Programming languages</div>
                            <div className="flex flex-col">
                                <div className="justify-start gap-3 ml-9 flex w-full">Frontend: <div className="font-medium">Javascript</div> </div> 
                                <div className="justify-start gap-4 ml-9 flex w-full">Backend:  <div className="font-medium">Python</div>     </div>
                            </div>
                        </div>

                    :   <div style={{backgroundColor:"#E7E7E7"}} className="relative min-h-full items-center shadow-2xl justity-center gap-1 flex flex-col font-bold font-sans text-center text-1xl w-11 h-screen overflow-hidden">
                            <div onClick={() => setShowInfo(true)} className="hover:bg-slate-300 mt-1 h-9 w-9 rounded-md cursor-pointer p-1.5 border-zinc-700 border-2">
                                <svg height={20} width={20} fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1805.937 276v1368.756H1920V276h-114.063Zm-739.106 73.765-80.642 80.642 473.02 473.02H0v113.948h1459.208l-473.02 473.02 80.643 80.642 610.694-610.693-610.694-610.58Z" fill-rule="evenodd"></path> </g></svg>
                            </div>
                        </div>
                
            }
            
        </div>
    )
}