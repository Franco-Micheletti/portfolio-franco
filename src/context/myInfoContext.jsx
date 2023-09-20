import { createContext, useState } from "react";

// Create context

export const MyInfoContext = createContext()  

// Create provider

export function MyInfoProvider ({children}) {
    const [showInfo, setShowInfo] = useState(false)

    const handleShowInfo = () => {

        if (showInfo == false) {
            setShowInfo(true)
            document.body.style.position = "fixed"
            document.body.style.width = "100%"
        } else {
            setShowInfo(false)
            document.body.style.position = "static"
            document.body.style.width = "auto"
        }
    }

    return(
        <MyInfoContext.Provider value={{
            showInfo,
            handleShowInfo
        }}>
            {children}
        </MyInfoContext.Provider>
    )
}


