import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../hooks/ThemeContext";
import { Toggle } from '@fluentui/react/lib/Toggle';
import { useTypewriter } from "react-simple-typewriter";
import { BsFillMortarboardFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { MdInterests } from 'react-icons/md';
import { DiReact, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiTypescript, SiMicrosoftsharepoint, SiCsharp } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import './Home.scss';
import { motion } from 'framer-motion';
import SocialIcons from "./SocialIcons";
import About from "./About";
import mypicture from './mustermann.jpg';

const skillsIcons = [
  { name: 'react', icon: <DiReact />, skill: '80%' },
  { name: 'html', icon: <DiHtml5 />, skill: '80%' },
  { name: 'css', icon: <DiCss3 />, skill: '80%' },
  { name: 'typescript', icon: <SiTypescript />, skill: '80%' },
  { name: 'csharp', icon: <SiCsharp />, skill: '80%' },
  { name: 'sharepoint', icon: <SiMicrosoftsharepoint />, skill: '80%' },
]

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { darkMode } = theme;
  const { t } = useTranslation();
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Shayan Bondar",
      "I'm a front-end developer",
      "and I like coffee"

    ],
    loop: true,
    delaySpeed: 2000,
  });
  const [headline] = useTypewriter({
    words: [
      "Hello there!, my name is Shayan Bondar",
      "I'm a front-end developer",
      "and I like coffee"

    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className={`${darkMode ? 'bg-#18181b' : 'bg-white'}`}>
      <div className={`${darkMode ? 'bg-#18181b' : 'bg-white'} ml-14`}>
        <div className={`text-${darkMode ? 'white' : 'black'}`}>



          <div className="mb-5  pt-10 text-center">
            <p className='text-4xl ml-5 inline-block'>Hello there!</p>
            <div className="flex justify-center items-center">
              <hr className="border-t border-gray-500 my-8 w-60" />
            </div>
            <p className="text-xl">{t('welcome')}</p>
          </div>

          <div className="border border-collapse border-cyan-800 w-1/2 ml-auto mr-auto h-96">

            <img src={mypicture} alt="Shayan" className="w-52 float-right pt-20 pr-10" />
            

            <div className="pt-10 pl-2">
              <div className=" text-2xl">
                <span>
                  <div className="mr-96">&#123;</div>
                  <div className="">{t('name')}: Shayan Bondar <br /></div>
                  <div className=""> {t('birthday')}: 11.12.1994 <br /></div>
                  <div className="">{t('age')}: 28 <br /></div>
                  <div className="">{t('country')}: Germany <br /></div>
                  <div className="">{t('city')}: Ansbach <br /></div>
                  <div className="mr-96">&#125;</div>
                </span>
              </div>
            </div>

          </div>

          <About />

          <SocialIcons />

        </div>

        <br /><br />

      </div>

    </div>
  );
};

export default Home;
