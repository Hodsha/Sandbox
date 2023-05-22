import React, { useContext, useEffect, useState } from 'react';
import './Navbarz.scss';
import logo from './logo2.png';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { MdUpdate } from 'react-icons/md';
import { GrLanguage } from 'react-icons/gr';
import { FaMoon, FaSun } from 'react-icons/fa';
import { use } from 'i18next';
import { ThemeContext } from '../hooks/ThemeContext';
import LanguageBTN from './LanguageBTN';


const Navbarz = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const options = ['DE', 'EN'];
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleDarkMode = () => {
    theme.toggleDarkMode();
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    //   <div className="navbar-container">
    //     <img src={logo} alt="ShayanLogo" className='logo' />
    //     <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
    //       <span className="line"></span>
    //       <span className="line"></span>
    //       <span className="line"></span>
    //     </button>
    //     <div className='nav-mid'>
    //       <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
    //         <Link to="/" className='nav-item'>
    //           <AiFillHome size={40} className='navIcons' />
    //           Home
    //         </Link>
    //         <Link to="/Movie" className='nav-item'>
    //           <BiMoviePlay size={40} className='navIcons' />
    //           Movie Recmdt.
    //         </Link>
    //         <Link to="/TimeLine" className='nav-item'>
    //           <MdUpdate size={40} className='navIcons' />
    //           Updates
    //         </Link>
    //       </ul>
    //     </div>
    //     <div className={`nav-right ${isMenuOpen ? 'open' : ''} pr-2`}>
    //       <div className='nav-item pr-3'>
    //         <button className={`text-${theme.darkMode ? 'light' : 'dark'}   `} onClick={handleToggleDarkMode}>
    //           {theme.darkMode ? <FaMoon className='text-white' size={30} /> : <FaSun className='text-yellow-300' size={30} />}
    //         </button>
    //       </div>
    //       <div>
    //         <LanguageBTN options={options} />
    //       </div>
    //     </div>

    //     <div>
    //     </div>
    //   </div>
    // </nav>
    <header>
      <div className='nav-container'>
        <div className='nav-center'>
          <ul className='nav-items'>
            <li>
              <AiFillHome size={40} className='nav-icon' />Home
            </li>
            <li>
              <BiMoviePlay size={40} className='nav-icon' />Movie rec.
            </li>
            <li>
              <MdUpdate size={40} className='nav-icon' />updates
            </li>
          </ul>
        </div>

        <div className='nav-right '>
          <ul className='nav-items'>
            <li>
              <div className="dropdown-button">
                <button className="dropdown-button__button" onClick={toggleDropdown}>
                  Toggle Dropdown
                </button>
                {isOpen && (
                  <div className="dropdown-button__dropdown">
                    <ul>
                      <li>Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                    </ul>
                  </div>
                )}
              </div>

            </li>
            <li>
              <button className={`text-${theme.darkMode ? 'light' : 'dark'} mr-3`} onClick={handleToggleDarkMode}>
                {theme.darkMode ? <FaMoon className='text-white' size={30} /> : <FaSun className='text-yellow-300' size={30} />}
              </button>
            </li>

          </ul>


        </div>
      </div>


    </header>
  );
}

export default Navbarz
