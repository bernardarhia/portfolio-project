import React,{useContext} from 'react'
import {logout} from '../utils/logout'
import {verifyToken} from '../utils/validateToken'
import {Link, useHistory} from 'react-router-dom'
import { userContext } from '../context/userContext'
const Dashboard = (props) => {
    const {setUser} = useContext(userContext);
    const redirectTo = useHistory()
    const handleLogout = async ()=>{
        const token = await verifyToken();
        await logout(token)
        setUser({type:"LOGOUT"})
        redirectTo.push('/login')
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
            <Link to={{ pathname: "/account",state: { from: props.location }}}>Account</Link>
        </div>
    )
}

export default Dashboard
