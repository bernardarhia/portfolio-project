import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImage from '../assets/img/notfound.svg'
const NotFound = (props) => {
    console.log(props);
    return (
        <div className="error-page" style={{background:`url(${notFoundImage})`}}>
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
