import React from 'react'
import { Link } from 'react-router-dom';

const Account = ({location}) => {
   
    return (
        <div>
            <h1>Account Page</h1>
        <Link to='/dashboard'>Go back</Link>
        </div>
    )
}
export default Account
