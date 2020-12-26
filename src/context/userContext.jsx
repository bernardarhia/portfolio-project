import React, {createContext, useReducer} from 'react'
import {userReducer} from '../reducers/reducers/userReducer'
import {userInitialState} from '../reducers/states/userInitialState'

export const  userContext= createContext({})
const UserContext = ({children}) => {
   const [user, setUser] = useReducer(userReducer, userInitialState)
    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext
