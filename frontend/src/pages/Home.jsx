import React,{useContext, useEffect} from 'react'
import { userContext } from '../context/userContext';
import {Link, useHistory} from 'react-router-dom'
import requests from '../apis/requests';
import { verifyToken } from '../utils/validateToken';
 const Home = ({ location:{state:urlState}}) => {
    const redirectTo = useHistory()
    const {user, setUser} = useContext(userContext);
  
     useEffect(() => {
     const verify = async ()=>{
       const token = await verifyToken();
      try {
        const userIsLoggedIn = await requests.verify('/has_token',token);
        if(userIsLoggedIn.data) {
          const user = await requests.me('/me',token);
          setUser({type:'hasToken', user:user.data})
          if(urlState){
            redirectTo.push(urlState.from.pathname);
          }else{
              redirectTo.push('/dashboard')
          }
        }
      } catch (error) {
       if(error.response){
         console.log(error);
       }
      }
  
     }
     verify();
     }, [redirectTo,setUser,urlState])
    return (
        <>
        {!user.isAuth && <div>
           <Link to="/login">Login</Link>
        </div>}
        </>
    )
}

export default Home
