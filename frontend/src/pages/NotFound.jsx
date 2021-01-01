import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = (props) => {
    console.log(props);
    return (
        <div className="error-page">
            <div className="content">
                <div className="small-text">oops</div>
                <div className="big-text">4<span>0</span>4</div>
                <div className="redirect">
                    <Link to="/">Go home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
