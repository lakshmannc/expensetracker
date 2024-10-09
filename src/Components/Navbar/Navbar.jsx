import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src = "" alt = ""/>
                <p>EXPENSE TRACKER</p>
            </div>
            <ul className="nav-menu">
                <li>BUDGET ASSISTANT</li>
                
            </ul>
            <div className='nav-login'>
                <button>login</button>

                
            </div>

        </div>
    )
}

export default Navbar