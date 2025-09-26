import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "./navbar.css"
import { Link, useLocation } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
import { useTheme } from '../../App'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState("");
    const location = useLocation();
    const { theme, handleToggleTheme } = useTheme();

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link to="/" className="nav_logo">
                <img className='logo' src={Logo} alt="" srcset="" />
                </Link>
                <div className={`nav_menu ${showMenu}`}>
                    <ul className="nav_list grid">
                        <motion.li 
                            className="nav_items" 
                            onClick={() => setShowMenu("")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/" className={`nav_links ${location.pathname === "/" ? "active-link" : ""}`}>
                                <i className="uil uil-estate nav_icon"></i>Home
                            </Link>
                        </motion.li>
                        <motion.li 
                            className="nav_items" 
                            onClick={() => setShowMenu("")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/about" className={`nav_links ${location.pathname === "/about" ? "active-link" : ""}`}>
                                <i className="uil uil-user nav_icon"></i>About
                            </Link>
                        </motion.li>
                        <motion.li 
                            className="nav_items" 
                            onClick={() => setShowMenu("")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/skill" className={`nav_links ${location.pathname === "/skill" ? "active-link" : ""}`}>
                                <i className="uil uil-file-alt nav_icon"></i> Skills
                            </Link>
                        </motion.li>
                        <motion.li 
                            className="nav_items" 
                            onClick={() => setShowMenu("")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/project" className={`nav_links ${location.pathname === "/project" ? "active-link" : ""}`}>
                                <i className="uil uil-scenery nav_icon"></i>Project
                            </Link>
                        </motion.li>
                        <motion.li 
                            className="nav_items" 
                            onClick={() => setShowMenu("")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact" className={`nav_links ${location.pathname === "/contact" ? "active-link" : ""}`}>
                                <i className="uil uil-message nav_icon"></i>Contact
                            </Link>
                        </motion.li>

                    </ul>
                    <i className="uil uil-times nav_close" onClick={() => setShowMenu("")}></i>
                </div>
                <div className="nav_btns" >
                    <i className={`${theme === "dark" ? "uil uil-moon" : "uil uil-sun"} change_theme`} onClick={handleToggleTheme} ></i>
                    <div className="nav_toggle" onClick={() => setShowMenu("show-menu")}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
