import React from 'react'
import Input from './Input.'

const SocialLink = ({socialLink}) => {
    return (
        
        <div className="input-with__label">
        <label htmlFor={socialLink.toLowerCase()}>{socialLink}</label>
        <Input className="input_small" id={socialLink.toLowerCase()} />
      </div>
    )
}

export default SocialLink
