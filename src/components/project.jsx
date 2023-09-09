import { Urls } from "./urls"

export const Project = ({projectName,projectInfo,projectImage,githubUrl,websiteUrl}) => {

    return (
        <div className="select-none rounded-xl justify-center flex items-center flex-col border-solid border-transparent border-opacity-50 border-2">
            <img width={320} height={175} src={projectImage} className=""></img>
            <div className="font-bold text-black bg-white flex h-20 justify-center items-center text-lg w-80">{projectName}</div>
            <Urls 
                githubUrl={githubUrl}
                websiteUrl={websiteUrl}
            />
        </div>
    )
}