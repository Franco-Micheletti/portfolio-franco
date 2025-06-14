import React, { useEffect, useContext } from "react";
import '../css/animation.css'
import { Urls } from "./urls";
import { Project } from "./project";
import { MyInfoContext } from "../context/myInfoContext";
export const Projects = () => {

  const { showInfo, handleShowInfo } = useContext(MyInfoContext)

  useEffect(() => {

    setTimeout(() => {
      handleShowInfo()
    }, 1200)

  }, [])

  return (
    <div className="w-full">
      <div className="bg-white w-auto min-h-screen">
        <div style={{ backgroundColor: "rgb(211, 211, 211,0.30)" }} className="min-h-screen justify-center flex flex-col items-center p-5">
          <div className="projects-title text-8xl text-center text-sky-900 font-semibold p-5 mt-12 select-none">PROJECTS</div>
          <div className="flex flex-col mt-10 p-3 project-type-frontend justify-center items-center">
            <div className="project-type-title text-8xl text-white font-semibold flex select-none py-4">Frontend</div>
            <div className="w-full flex justify-center items-center">
              <div className="projects-list w-fit flex-wrap inline-flex justify-center content-start items-start mt-20 gap-5">
                {/* E commerce */}
                <Project projectName={"E-commerce Frontend"}
                  projectImage={"./images/ecommerce-main.webp"}
                  githubUrl={"https://github.com/Franco-Micheletti/ecommerce-frontend"}
                  videoUrl={"https://drive.google.com/file/d/1Qh4WuMbJ6H9b2D3zIV9ODM0YDdYgsaNL/view"}
                  technologies={"React | Redux"} />
                {/* International Weather App*/}
                <Project projectName={"International Weather App"}
                  projectImage={"./images/weather-main.webp"}
                  githubUrl={"https://github.com/Franco-Micheletti/international-weather-app/tree/main/weather-app"}
                  websiteUrl={"https://international-weather-app.vercel.app/"}
                  technologies={"React | Tailwind | Vite.js"}
                />
                {/* AoA APP*/}
                <Project projectName={"Aoe2 Analytics"}
                  projectImage={"./images/aoa.webp"}
                  websiteUrl={"https://aoa.vercel.app/"}
                  technologies={"React | Next.js | Tailwind"}
                />
                {/* URL SHORTENER*/}
                <Project projectName={"URL Shortener"}
                  projectImage={"./images/url-shortener.webp"}
                  githubUrl={"https://github.com/Franco-Micheletti/url-shortener-frontend"}
                  websiteUrl={"https://myshorturls.vercel.app/"}
                  technologies={"React | Tailwind | Vite.js"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 p-3 mb-20 project-type-backend justify-center items-center">
            <div className="project-type-title text-8xl text-white font-semibold flex select-none py-4">Backend</div>
            <div className="projects-list w-fit flex-wrap inline-flex justify-center content-start items-start mt-20 gap-5">
              {/* E-commerce Backend*/}
              <Project projectName={"E-commerce Backend"}
                projectImage={"./images/e-commerce-backend.webp"}
                githubUrl={"https://github.com/Franco-Micheletti/ecommerce-backend"}
                technologies={"Python | Django Rest | JWT"} />
              {/* URL shortener Backend */}
              <Project projectName={"URL Shortener Backend"}
                projectImage={"./images/url-shortener-backend-image.webp"}
                githubUrl={"https://github.com/Franco-Micheletti/url-shortener-backend/"}
                technologies={"Python | Django Rest | mySQL | JWT"} />
              {/* Vehicles API */}
              <Project projectName={"Vehicles API"}
                projectImage={"./images/car-api.webp"}
                githubUrl={"https://github.com/Franco-Micheletti/test-dev"}
                technologies={"Python | Django Rest | SQLite"} />
              {/* Frequency Table*/}
              <Project projectName={"Frequency table Program"}
                projectImage={"./images/frequency-table.webp"}
                githubUrl={"https://github.com/Franco-Micheletti/Generate-Frequencies-Table"}
                technologies={"Python"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}