import { t } from "i18next";
import React, { useContext } from "react";
import { BsFillMortarboardFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdInterests } from "react-icons/md";
import { ThemeContext } from "../hooks/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { darkMode } = theme;
  return (
    <div className="">
      <h1 className="text-center float-none mt-10 text-4xl">{t('about')}</h1>
      <div className="grid grid-cols-1 text-lg font-mono whitespace-normal md:grid-cols-3 gap-4 mt-10">
        <div className=" p-4">
          <span className="text-4xl font-bold mb-2 justify-center flex"><FaUserAlt size={50} color='blue' /></span>
          <div>{t('user')}</div>
        </div>
        <div className=" p-4">
          <h2 className="text-lg font-bold mb-2 justify-center flex"><BsFillMortarboardFill size={50} /></h2>
          <div>{t('learn')}</div>
        </div>
        <div className=" p-4">
          <h2 className="text-lg font-bold mb-2 justify-center flex"><MdInterests size={50} color='red' /></h2>
          <div>{t('interests')}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
