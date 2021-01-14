import React from 'react'
import {motion} from 'framer-motion'
const Avatar = ({avatar, initials, ...rest}) => {
    return (
        <motion.div className="user_avatar" {...rest}>
            {avatar ? <img src="" alt="avatar" />:<div>{initials}</div>}
        </motion.div>
    )
}

export default Avatar
