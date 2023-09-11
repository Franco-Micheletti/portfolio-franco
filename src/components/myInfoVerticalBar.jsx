import { useContext } from "react"
import { MyInfoContext } from "../context/myInfoContext"

export const MyInfoVerticalBar = () => {

    const {showInfo,setShowInfo} = useContext(MyInfoContext)
    return (
        <div onClick={() => setShowInfo(true)} className="cursor-pointer absolute z-10 flex justify-center w-36 h-36 bg-gray-200 rounded-e-3xl hover:bg-slate-300">
            <div className="rounded-full z-10 absolute items-center justity-center gap-1 flex flex-col font-bold font-sans text-center text-1xl overflow-hidden p-5">
                <div >
                    <img className="rounded-full shadow-slate-950" width={100} height={100} src={`./images/my-image-rounded.png`} alt="My photo"></img>
                </div>
            </div>
        </div>
    )
}



