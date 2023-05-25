import React from "react";
import { Myinfo } from "./myInfo";
import { Projects } from "./projects";

export const Home = () => {


    
    return (
        <div className="flex">
            <Myinfo />
            <Projects />
        </div>
    )
}