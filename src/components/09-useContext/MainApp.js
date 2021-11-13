import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UsertContext } from './UserContext'



export const MainApp = () => {

    const [user, setUser] = useState({});
    return (
        <UsertContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter />

        </UsertContext.Provider>            
        
    )
}
