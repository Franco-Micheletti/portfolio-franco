export const Urls = ({githubUrl,websiteUrl,videoUrl}) => {

    return (
        <div className="font-bold text-black bg-gray-600 flex flex-col h-20 justify-center items-center text-lg w-full rounded-br-md rounded-bl-md">
            <div className="project-links flex justify-evenly p-1 gap-3">
                {
                    githubUrl 
                            ?   <a href={githubUrl} style={{color:"#27374D"}} className="hover:border-sky-900 border-2 bg-white select-none cursor-pointer w-24 h-12 rounded-md justify-center flex items-center text-md font-medium">
                                    Github
                                </a>

                            :   <></>
                }
                
                {
                    websiteUrl 
                            ?   <a href={websiteUrl} style={{color:"#27374D"}} className="hover:border-sky-900 border-2 bg-white select-none cursor-pointer w-24 h-12 rounded-md justify-center flex items-center text-md font-medium  ">
                                    Web
                                </a>
                                
                            :   <></>
                }
                {
                    videoUrl 
                            ?   <a href={videoUrl} style={{color:"#27374D"}} className="hover:border-sky-900 border-2 bg-white select-none cursor-pointer w-24 h-12 rounded-md justify-center flex items-center text-md font-medium  ">
                                    Video
                                </a>
                                
                            :   <></>
                }
            </div>
        </div>
    )
}