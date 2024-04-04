import { BrowserRouter } from "react-router-dom";

import {  useAuth  } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { CostumerRoutes } from "./costumer.routes";
import { USER_ROLE } from "../utils/roles";
import { useEffect, useState } from "react";
import { api } from "../services/api";
export function Routes(){
    const[authorized, setAuthorized] = useState(false)
    const{ user, signOut} = useAuth()
  
     
    useEffect(() => {
        async function getValidated(){
            console.log(user)
            
                try{
                    await api.get('/users/validated')
                }catch(error){
                    signOut()
                }
        }
        getValidated()
    },[])
    
    
    
    function AcessRoute(){
        
            switch(user.role){
                case USER_ROLE.ADMIN:
                    return <AdminRoutes/>;
                case USER_ROLE.COSTUMER:
                    return <CostumerRoutes/>;
                default:
                    return <CostumerRoutes/>;
            }
    }
    return(
        <BrowserRouter>
            {user ? <AcessRoute />:  <AuthRoutes/> }
        </BrowserRouter>
    )
}