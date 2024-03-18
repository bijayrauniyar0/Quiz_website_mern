import React, {useState} from 'react'
import './Navbar.css'


const Navbar = () => {

    const [dropMenu, setDropMenu] = useState(false)

    function handleDropMenu(){
        setDropMenu(!dropMenu)
    }
    
  return (
    <>
        <nav className='nav'>
            <div className="left">
                <ul>
                    <li><a href="/">Loop Verse</a></li>
                </ul>
            </div>
            <div className="mid">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Play Now</a></li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div className="toggler">
                <i className="fa-solid fa-bars" onClick={handleDropMenu}></i>
            </div>
            <div className={`drop-menu ${dropMenu? "active":""}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Play Now</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
