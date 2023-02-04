import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider( {children}){
    const [usuario, setUsuario] = useState({})
    
    function login(email, senha){
        if(email == 'marcionei@email.com' 
        && senha == 123){
            setUsuario({
                nome: 'Marcionei',
                email: email,
                endereco: 'Rua do Programa, 1010',
                telefone: '(99) 9 9999-9999'
        })
            return 'ok'
        }
        else{
            return 'E-mail ou senha incorretos';
        }
    }

    return (
        <AutenticacaoContext.Provider value={{
            usuario,
            login,
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}