import { api } from '../services/api';
import { useContext, useState, createContext, useEffect } from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}){
    const[data, setData] = useState({})

    async function signIn({email, password}){
        try{
            const response = await api.post(
                "/session", {email, password},
                {withCredentials:true} ) //criar a sessão

            const{ user } = response.data; //obter a resposta e desestruturar ela

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))


            setData({ user });

        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível conectar")
            }
        }
    }

    async function signOut(){
        localStorage.removeItem("@foodexplorer:user")
        await api.delete("session/logout");
        setData({})
    }


    useEffect( () => {
        const user =  localStorage.getItem("@foodexplorer:user")
        console.log(user)
        setData({
            user:JSON.parse(user)
        })
        
    }, [])

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user
          }}>
            {children}
          </AuthContext.Provider>
    ) //returna um contexto que prove todas as funções para todos os filhos. Ele é colocado acima de routes em main.jsx para prover tudo a todas as pages

}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}


export{AuthProvider, useAuth}