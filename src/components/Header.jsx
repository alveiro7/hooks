import React from 'react'

import {useState} from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="Header">
            <h1>ReactHooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Ligth Mode'}</button>
        </div>
    )
}

export default Header
