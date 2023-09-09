import { createContext, useState } from "react";

// Create context

export const MyInfoContext = createContext()  

// Create provider

export function MyInfoProvider ({children}) {
    const [showInfo, setShowInfo] = useState(false)
    
    return(
        <MyInfoContext.Provider value={{
            showInfo,
            setShowInfo
        }}>
            {children}
        </MyInfoContext.Provider>
    )
}


