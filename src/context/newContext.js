
import React, { useState } from "react";

export const NewContext = React.createContext();

const NewProvider = ({children}) => {
    const [myCounter,setMyCounter] = useState([]);
    return (
        <NewContext.Provider value={{myCounter,setMyCounter}}>
            {children}
        </NewContext.Provider>
    )
}

export default NewProvider;