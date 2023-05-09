import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../hooks/ThemeContext';
import { AiOutlineClose, AiOutlineArrowRight, AiFillHome, } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import mypicture from './mustermann.jpg';
import './Header.scss';
import { useTypewriter } from 'react-simple-typewriter';
import i18n from './i18n';
import { Toggle } from '@fluentui/react';





function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, [])

  return size;
}

export default function Header() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("English");
  const { theme } = useContext(ThemeContext);
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Shayan Bondar",
      "I'm a front-end developer",
      "and I like coffee"

    ],
    loop: true,
    delaySpeed: 2000,
  });
  const handleToggleDarkMode = () => {
    theme.toggleDarkMode();
  };

  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [width] = useWindowSize();

  const handleClickOutside = (event: MouseEvent) => {

    if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);

  };

  const handleClose = () => {
    setIsOpen(false);

  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   if (width > 680) {
  //     setIsOpen(false);
  //   }
  // }, [width])

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

    <div ref={navbarRef}>
      {!isOpen && (
        <div className='bg-black w-14 h-full fixed z-10'>
          <a onClick={handleOpen}><RxHamburgerMenu className='text-2xl cursor-pointer text-white ml-4 mt-3' /></a>
          <ul className='mt-5'>
            <li>
              <Link to="/" className=" text-white">
                <AiFillHome className='float-left ml-2 mt-2 text-4xl' />
              </Link>
            </li>
            <li>
              <Link to="/Movie" className="text-white">
                <BiMoviePlay className='float-left ml-2 mt-5 text-4xl' />
              </Link>
            </li>
            <li>
              <button
                className='ml-4 mt-3 '
                onClick={handleToggleDarkMode}
              >
                {theme.darkMode ? <FaSun className='text-white  mt-3 text-2xl mr-2 bottom-10 absolute ' /> : <FaMoon className='text-white mr-auto ml-0  mt-3 text-2xl bottom-10 absolute ' />}
              </button>
            </li>
          </ul>
        </div>
      )}

      <div className={`${isOpen ? 'is-active' : ''}`} >
        <div className='sidenav z-10'>
          <a onClick={handleClose}> <AiOutlineClose className=' text-white float-right mr-2 mt-2 cursor-pointer' /></a>
          <img src={mypicture} className='rounded-full' />
          <p className='text-white ml-5 text-sm inline-block'>{text}</p>
          <div className='text-3xl mt-5 text-white'>
            <BsGithub className=' float-left ml-3' />
            <BsInstagram className=' float-left ml-4' />
            <BsTwitter className=' float-left ml-4 mr-4' />
            <BsLinkedin />
          </div>
          <p className='text-white text-xs text-center mt-2'>shayanbondar94@gmail.com</p>
          <ul className=' mt-10'>
            <li className='mt-4 pl-4'>
              <Link to="/" className=" text-white">
                <AiFillHome className='float-left mr-3 text-2xl' /> Home
              </Link>
            </li>
            <li className='mt-4 pl-4'>
              <Link to="/Movie" className="text-white">
                <BiMoviePlay className='float-left mr-3 text-2xl' /> Movie
              </Link>
            </li>
            <li className='pl-4 mt-4'>
              <button
                className="text-white   "
                onClick={handleToggleDarkMode}
              >
                {theme.darkMode ?   <span className=' float-left'><FaSun className=' float-left mt-1 text-2xl'/> <p className='float-left ml-3'>Lightmode</p>  </span>  : <span className=' float-left'> <FaMoon className='float-left mt-1 text-2xl'/> <p className='float-left ml-3'>Darkmode</p></span>}
              </button>
            </li>
            <li className='pl-4 mt-3'>
               <p><Toggle checked={isChecked}  onChange={toggleLanguage}  className='float-left mt-2 bg-red-500 rounded-xl'/> <span className='text-white ml-2'>{language}</span> </p>
            </li>
        
          </ul>
        </div>
      </div>




    </div >

  )
}
