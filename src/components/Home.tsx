import React, { useContext, useState } from "react";
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
import Introduction from "./Introduction";

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
  const [isHovered, setIsHovered] = useState(false);
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

  const [introduction] = useTypewriter({
    words: [
      "Junior Frontend Developer"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={`${darkMode ? 'bg-#18181b' : 'bg-white'} `}>

      <div className={`text-${darkMode ? 'white' : 'black'}`}>

        <Introduction />
<div className="eins">

</div>
        <About />

        <SocialIcons />

      </div>

      <br /><br />

    </div>
  );
};

export default Home;
