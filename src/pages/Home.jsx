import React,{useContext} from 'react'
import { userContext } from '../context/userContext';
import {useHistory} from 'react-router-dom'
 const Home = () => {
    const {setUser} = useContext(userContext);
   
    const history = useHistory()
    
   const login = ()=>{
       setUser({type:'hasToken'});
       history.push('/dashboard');
   }
    return (
        <div>
           <button onClick={login}>Login</button>
        </div>
    )
}

export default Home
