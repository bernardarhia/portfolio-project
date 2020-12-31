import React, {createContext, useState} from 'react'

export const toolbarContext= createContext()  
const ToolbarContext = ({children}) => {
    const [showStyle, setShowStyle] = useState({
        style: false,
        social:false
    })
    return (
        <toolbarContext.Provider value={{showStyle, setShowStyle}}>
            {children}
        </toolbarContext.Provider>
    )
}

export default ToolbarContext;
