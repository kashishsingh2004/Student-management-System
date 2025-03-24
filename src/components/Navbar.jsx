import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className='container'>
            <Link to="/" >Home</Link>
            <Link to="/Student" >Student</Link>
            <Link to="/Contact" >Contact</Link>
            
            </div>
        </>
    )
}

export default Navbar