import React,{useEffect, useState,useRef } from "react";
import '../css/animation.css'
import '../css/projects.css'

export const Projects = () => {

    const [showEcommerce, setShowEcommerce] = useState(false)
    const [showWeather, setShowWeather]     = useState(false)
    const ecommerceImages = useRef()

    useEffect(() => {
        
        setTimeout(()=>{
            setShowEcommerce(true)
            setTimeout(()=>{
                ecommerceImages.current.style.marginTop = "20px"
            },20)
        },2000)
        
    },[])
    
    const handleClickEcommerce = (element) => {

        showEcommerce 
            ?   setShowEcommerce(false)
            :   setShowEcommerce(true)

        setTimeout(()=>{
            ecommerceImages.current.style.marginTop = "20px"
        },10)
        
    }

    
    return (

        <div className="w-full">
            <div className="animationbg w-auto min-h-screen">
                <div className="bg-slate-950/30 min-h-screen">
                    <div className="gap-5 w-full justify-start flex flex-col items-center bg-white/70 min-h-screen">
                        <div style={{color: "#27374D"}} className="mt-20 mb-20 font-bold text-6xl text-center">MY PROJECTS</div>
                        <div onClick={() => handleClickEcommerce(ecommerceImages) } className="project-button select-none cursor-pointer w-64 h-16 rounded-md justify-center flex items-center">
                            <div className="font-bold text-white">
                                E-commerce website
                            </div>
                        </div>
                        <div>
                            {showEcommerce

                                ?   <div>
                                        <div className="project-links flex justify-evenly p-6">
                                            <a href="https://github.com/Franco-Micheletti/ecommerce-frontend" style={{color:"#27374D"}} className="hover:border-gray-400 border-2 bg-white select-none cursor-pointer w-52 h-12 rounded-md justify-center flex items-center text-md font-medium">
                                                See Code in Github
                                            </a>
                                            <a href="https://ecommerce-frontend-sooty.vercel.app/" style={{color:"#27374D"}} className="hover:border-gray-400 border-2 bg-white select-none cursor-pointer w-52 h-12 rounded-md justify-center flex items-center text-md font-medium  ">
                                                Website
                                            </a>
                                        </div>
                                        <div ref={ecommerceImages} style={{transition: "all 0.1s cubic-bezier(0.4, 0, 1, 1) 0s",marginTop: "-10px"}} className="mb-5 p-7 flex flex-wrap gap-5 overflow-hidden justify-center rounded-3xl">
                                            <img style={{boxShadow:"rgb(133 130 130) 0px 3px 9px -3px"}} width={300} height={175} src="./images/e-commerce-1.webp" className="ease-in duration-75 project-image rounded-xl"></img>
                                            <img style={{boxShadow:"rgb(133 130 130) 0px 3px 9px -3px"}} width={300} height={175} src="./images/e-commerce-2.webp" className="ease-in duration-75 project-image rounded-xl"></img>
                                            <img style={{boxShadow:"rgb(133 130 130) 0px 3px 9px -3px"}} width={300} height={175} src="./images/e-commerce-3.webp" className="ease-in duration-75 project-image rounded-xl"></img>
                                            <img style={{boxShadow:"rgb(133 130 130) 0px 3px 9px -3px"}} width={300} height={175} src="./images/e-commerce-4.webp" className="ease-in duration-75 project-image rounded-xl"></img>
                                        </div>
                                    </div>
                                :   <></>
                            }
                        </div>
                        <div onClick={() => { showWeather ? setShowWeather(false) : setShowWeather(true)}} className="project-button select-none mb-6 cursor-pointer w-64 h-16 rounded-md justify-center flex items-center">
                            <div className="font-bold text-white">
                                International weather website
                            </div>
                        </div>
                        {showWeather
                            ?   <div>
                                    <div className="project-links flex justify-evenly p-6">
                                        <a href="https://github.com/Franco-Micheletti/international-weather-app/tree/main/weather-app" style={{color:"#27374D"}} className="hover:border-gray-400 border-2 bg-white select-none cursor-pointer w-52 h-12 rounded-md justify-center flex items-center text-md font-medium">
                                            See Code in Github
                                        </a>
                                        <a href="https://international-weather-app.vercel.app/" style={{color:"#27374D"}} className="hover:border-gray-400 border-2 bg-white select-none cursor-pointer w-52 h-12 rounded-md justify-center flex items-center text-md font-medium  ">
                                            Website
                                        </a>
                                    </div>
                                    <div ref={ecommerceImages} style={{transition: "all 0.1s cubic-bezier(0.4, 0, 1, 1) 0s",marginTop: "-10px"}} className="mb-5 p-7 flex flex-wrap gap-5 overflow-hidden justify-center rounded-3xl">
                                        <img style={{boxShadow:"rgb(133 130 130) 0px 3px 9px -3px"}} width={300} height={175} src="./images/weather1.webp" className="ease-in duration-75 project-image rounded-xl"></img>
                                        <img style={{boxShadow:"rgb(133 130 130) 0px 3px 9px -3px"}} width={300} height={175} src="./images/weather2.webp" className="ease-in duration-75 project-image rounded-xl"></img>
                                    </div>
                                </div>
                            :   <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}