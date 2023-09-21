import { Urls } from "./urls"

export const Project = ({projectName,projectInfo,projectImage,githubUrl,websiteUrl,videoUrl}) => {

    return (
        <div className="project select-none rounded-xl justify-center flex items-center flex-col shadow-2xl">
            <div>
                <img className="border-b-2 project-image" width={320} height={175} src={projectImage}></img>
            </div>
            <div className="font-bold text-black bg-white flex h-20 justify-center items-center text-lg w-full">{projectName}</div>
            <Urls 
                githubUrl={githubUrl}
                websiteUrl={websiteUrl}
                videoUrl={videoUrl}
            />
        </div>
    )
}