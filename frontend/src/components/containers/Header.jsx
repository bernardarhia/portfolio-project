import React from 'react'

const Header = ({children}) => {
    return (
        <header className="header">
           <nav>
           {children}
           </nav>
        </header>
    )
}

export default Header
