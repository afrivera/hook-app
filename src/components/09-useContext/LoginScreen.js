import React, { useContext } from 'react'
import { UsertContext } from './UserContext'

export const LoginScreen = () => {

    //1. obtener la referencia al usercontext
    const {setUser} = useContext(UsertContext);

    //2. setUser
    /* 
        {
            id:123,
            name: 'Andres'
        }
    */

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>     
            <button
                className="btn btn-primary"
                onClick={ () =>setUser( {
                    id:123,
                    name: 'Andres'
                })}
            >
                Login    
            </button>        
        </div>
    )
}
