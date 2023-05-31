import React, { useContext, useEffect, useState } from 'react';
import './Navbarz.scss';
import logo from './logo2.png';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { MdLanguage, MdUpdate } from 'react-icons/md';
import { GrLanguage } from 'react-icons/gr';
import { FaMoon, FaSun } from 'react-icons/fa';
import { use } from 'i18next';
import { ThemeContext } from '../hooks/ThemeContext';
import LanguageBTN from './LanguageBTN';
import i18n from './i18n';


const Navbarz = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [isFlag, setFlag] = useState(false);
  const [language, setLanguage] = useState<string>("Deutsch");
  const [isChecked, setIsChecked] = useState<boolean>(false);
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

  const handleFlag = () => {
    setFlag(!isFlag);
  }
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'de' : 'en';

    setLanguage(newLanguage === 'en' ? 'English' : 'Deutsch');
    i18n.changeLanguage(newLanguage);
    newLanguage === 'en' ? setIsChecked(false) : setIsChecked(true);
    localStorage.setItem('language', newLanguage);
  };
  useEffect(() => {
    const lastLanguage = localStorage.getItem('language');
    if (lastLanguage) {
      i18n.changeLanguage(lastLanguage);
      lastLanguage === 'en' ? setIsChecked(false) : setIsChecked(true);
    }
  }, [i18n]);
  return (
    <header>
      <div className='nav-container'>

        <div className='nav-center'>
          <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
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
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <button onClick={toggleLanguage}>
                {isChecked ? <img src="https://flagcdn.com/28x21/de.png" width="28" height="21" alt="Germany" /> : <img src="https://flagcdn.com/28x21/gb.png" width="28" height="21" alt="United Kingdom" />}
              </button>

            </li>
            <li>
              <button className={`text-${theme.darkMode ? 'light' : 'dark'} mr-3`} onClick={handleToggleDarkMode}>
                {theme.darkMode ? <FaSun className='text-yellow-300' size={30} /> : <FaMoon className='text-white' size={30} />}
              </button>
            </li>

          </ul>


        </div>
      </div>


    </header>
  );
}

export default Navbarz
