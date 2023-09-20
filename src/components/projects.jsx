import React,{useEffect,useContext } from "react";
import '../css/animation.css'
import { Urls } from "./urls";
import { Project } from "./project";
import { MyInfoContext } from "../context/myInfoContext";
export const Projects = () => {

    const {showInfo, handleShowInfo}  = useContext(MyInfoContext)

    useEffect(() => {

        setTimeout(()=>{
            handleShowInfo()
        },1200)

    }, [])

    return (
        <div className="w-full">
            <div className="bg-white w-auto min-h-screen">
                <div className="bg-slate-950/30 min-h-screen justify-center flex flex-col items-center">
                    <div className="projects-title text-8xl text-center text-sky-900 font-semibold p-5 mt-40">PROJECTS</div>
                    <div className="flex flex-col mt-10">
                        <div className="project-type-title text-8xl text-slate-500 font-semibold flex">Frontend</div>
                        <div className="projects-list inline-flex align-baseline mt-20 gap-5">
                            {/* E commerce */}
                            <Project projectName={"E-commerce Website"} 
                                    projectImage={"./images/e-commerce-3.webp"} 
                                    githubUrl={"https://github.com/Franco-Micheletti/ecommerce-frontend"}/>
                            {/* International Weather App*/}
                            <Project projectName={"International Weather App"} 
                                    projectImage={"./images/weather-main.webp"} 
                                    githubUrl={"https://github.com/Franco-Micheletti/international-weather-app/tree/main/weather-app"} 
                                    websiteUrl={"https://international-weather-app.vercel.app/"}/>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 mb-10">
                        <div className="project-type-title text-8xl text-slate-500 font-semibold flex">Backend</div>
                        <div className="projects-list inline-flex align-baseline mt-20 gap-5">
                            {/* E commerce */}
                            <Project projectName={"E-commerce Website"} 
                                    projectImage={"./images/e-commerce-3.webp"} 
                                    githubUrl={"https://github.com/Franco-Micheletti/ecommerce-frontend"}/>
                            {/* International Weather App*/}
                            <Project projectName={"International Weather App"} 
                                    projectImage={"./images/weather-main.webp"} 
                                    githubUrl={"https://github.com/Franco-Micheletti/international-weather-app/tree/main/weather-app"} 
                                    websiteUrl={"https://international-weather-app.vercel.app/"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}