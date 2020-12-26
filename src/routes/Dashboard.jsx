import React,{useContext} from 'react'
import Button from '../components/containers/Button';
import { userContext } from '../context/userContext';

const Dashboard = ({user : userDetails}) => {
    const {setUser}  = useContext(userContext)
    const logout = ()=>{
        setUser({type:'LOGOUT'})
    }
    return (
        <div>
            <h1>Welcome {userDetails.details && userDetails.details.name}</h1>
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}

export default Dashboard
