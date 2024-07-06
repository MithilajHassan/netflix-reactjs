import { createContext, useState } from "react";

export const QueryContext = createContext()

export default function QueryProvider({children}){
    const [searchQuery,setSearchQuery] = useState('')
    return(
        <QueryContext.Provider value={{searchQuery,setSearchQuery}}>
            {children}
        </QueryContext.Provider>
    )
}