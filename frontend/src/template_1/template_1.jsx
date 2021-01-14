import React from 'react'
import '../styles/templates/template_1.css'
import person from '../assets/img/person.png'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const Template_1= () => {
    return (
        <div className="template-one-main">
            <div className="template-one-bg">

            <div className="template-one-content">
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

            <div className="template-one-button">
                <button type="submit">Connect</button>
            </div>

            <div className="template-one-social">
            <div className="social-div">
            <p className="social">
            <a href="http://github.com/yussifweb" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            </p>
            <p className="social">
            <a href="http://github.com/yussifweb" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            </p>
            <p className="social">
            <a href="http://github.com/yussifweb" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
            </p>
            <p className="social">
            <a href="http://github.com/yussifweb" target="_blank" rel="noopener noreferrer"><FiMail /></a>
            </p>
            </div>
            </div>

            </div>
            </div>
            
            <div className="template-one-sideNav">
                <ul className="template-one-menu">
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

export default Template_1