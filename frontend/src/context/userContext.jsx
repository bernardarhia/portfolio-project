import React, {createContext, useReducer} from 'react'
import {userReducer} from '../reducers/reducers/userReducer'
import stateReducer from '../reducers/reducers/stateReducers'
import {userInitialState, initialState} from '../reducers/states/userInitialState'

export const  userContext= createContext({})
const UserContext = ({children}) => {

   const [user, setUser] = useReducer(userReducer, userInitialState)
   const [state, setState] = useReducer(stateReducer, initialState)
    return (
        <userContext.Provider value={{user, setUser, state, setState}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext
