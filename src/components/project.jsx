import { Urls } from "./urls"

export const Project = ({ projectName, projectInfo, projectImage, githubUrl, websiteUrl, videoUrl, technologies }) => {

  return (
    <div className="project w-[300px] select-none rounded-xl justify-start flex items-start flex-col shadow-2xl">
      <div>
        <img className="border-b-2 project-image rounded-tr-md rounded-tl-md" width={320} height={160} src={projectImage}></img>
      </div>
      <div className="bg-white flex justify-center items-center text-lg w-full flex-col p-4 h-[120px]">
        <div className="font-bold text-black">{projectName}</div>
        <div className="font-bold text-gray-500">{technologies}</div>
      </div>

      <Urls
        githubUrl={githubUrl}
        websiteUrl={websiteUrl}
        videoUrl={videoUrl}
      />
    </div>
  )
}