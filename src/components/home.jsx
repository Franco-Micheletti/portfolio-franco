import React,{ useState,useRef, useEffect} from "react";
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