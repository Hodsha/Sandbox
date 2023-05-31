import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { MdUpdate } from 'react-icons/md';
import logo from './logo2.png';


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-title">Shayan Bondar</div>
                <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>

                    <Link to="/" className='navbar-item'>
                        Home
                    </Link>
                    <Link to="/Movie" className='navbar-item'>
                        Movie
                    </Link>
                    <Link to="/TimeLine" className='navbar-item'>
                        Updates
                    </Link>|
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
