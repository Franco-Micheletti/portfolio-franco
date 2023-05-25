import React,{useState} from "react";
import '../css/animation.css'

export const Projects = () => {

    const [showEcommerce, setShowEcommerce] = useState(false)
    const [showWeather, setShowWeather]     = useState(false)
    
    return (

        <div className="w-full" style={{backgroundColor: "#526D82"}}>
            <div className="animationbg w-auto h-screen">
                <div className="bg-slate-950/30 h-screen">
                    <div className="gap-5 w-full justify-center flex flex-col items-center">
                    <div style={{color: "black"}} className="mt-20 mb-20 font-bold text-5xl">PROJECTS</div>
                    <div onClick={() => { showWeather ? setShowWeather(false) : setShowWeather(true)}} style={{backgroundColor:"#27374D"}} className="cursor-pointer w-64 h-16 rounded-md justify-center flex items-center">
                        <div style={{color: "white"}} className="font-bold">
                            International weather website
                        </div>
                    </div>
                    {showWeather
                        ?   <div className="flex gap-5">
                                <div className="w-36 h-36 bg-slate-200 rounded-sm"></div>
                                <div className="w-36 h-36 bg-slate-200 rounded-sm"></div>
                                <div className="w-36 h-36 bg-slate-200 rounded-sm"></div>
                                <div className="w-36 h-36 bg-slate-200 rounded-sm"></div>
                            </div>
                        :   <></>
                    }
                    <div onClick={() => { showEcommerce ? setShowEcommerce(false) : setShowEcommerce(true)}} style={{backgroundColor:"#27374D"}} className="cursor-pointer w-64 h-16 rounded-md justify-center flex items-center">
                        <div style={{color: "white"}} className="font-bold">
                            E-commerce website
                        </div>
                    </div>
                    {showEcommerce
                        ?   <div className="flex gap-5">
                                <div className="w-36 h-36 bg-slate-200 rounded-sm"></div>
                                <div className="w-36 h-36 bg-slate-200 rounded-sm"></div>
                                <div className="w-36 h-36 bg-slate-200 rounded-sm"></div>
                                <div className="w-36 h-36 bg-slate-200 rounded-sm"></div>
                            </div>
                        :   <></>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}