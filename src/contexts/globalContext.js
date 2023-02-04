import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider( {children}){
    const valor = 500;
    const [nome, setNome] = useState("Marcionei")
    
    return (
        <GlobalContext.Provider value={{
            valor,
            nome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}