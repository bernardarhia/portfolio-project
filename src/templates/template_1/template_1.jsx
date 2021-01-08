import React from 'react'
import '../../styles/templates/template_1.css'
import person from '../../assets/img/person.png'

const template_1= () => {
    return (
        <div className="main">
            <div className="content">
            <div className="image">
                <img src={person} alt="Person"/>
            </div>
            <div className="name">
                <p>JUSTICE DOE</p>
            </div>
            <div className="text">
                <p>Sunt sint do cillum nisi nostrud labore eiusmod.
                     Duis quis aute duis enim ullamco. Et est ex voluptate
                      quis minim. Ex anim nulla ut culpa qui aliquip </p>
            </div>
            <div className="button">
                <button type="submit">Connect</button>
            </div>
            </div>
            
            <div className="sideNav">
                <ul className="menu">
                    <li className="sideNavLink">
                    <a href="http://">Works</a>
                    </li>
                    <li className="sideNavLink">
                    <a href="http://">Resume</a>
                    </li>
                    <li className="sideNavLink">
                    <a href="http://">Skills</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default template_1