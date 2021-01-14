import React from 'react'
import { Route } from 'react-router-dom'

const PublicRoute = ({component:Component, ...rest}) => {
    return (
        <Route render={()=>{
        return <Component {...rest} />
        }} />
    )
}

export default PublicRoute
