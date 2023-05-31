import React, { useState } from 'react'
import mypicture from './mustermann.jpg';
import { t } from 'i18next';
import './Introduction.scss';
const Introduction = () => {
    const [isHoveredEN, setIsHoveredEN] = useState(false);
    const [isHoveredDE, setIsHoveredDE] = useState(false);
    const handleHoverEN = () => {
        setIsHoveredEN(!isHoveredEN);
      };
      const handleHoverDE = () => {
        setIsHoveredDE(!isHoveredDE);
      };
    return (
        <div className="component">
            <div className="text-container">
                <h1 className="text-2xl">Hi, I'm Shayan Bondar</h1>
                <p className="text-xl">Junior Frontend Developer</p>
                <p className="text-lg">I'm a passionated Front-end React Developer.</p>
                <div className="pt-10 pl-2">
                    <div className=" text-2xl">
                        <span>
                            <div className="mr-96 ml-1">&#123;</div>
                            <div className="ml-4">{t('name')}: Shayan Bondar <br /></div>
                            <div className="ml-4"> {t('birthday')}: 11.12.1994 <br /></div>
                            <div className="ml-4">{t('age')}: 28 <br /></div>
                            <div className="ml-4">{t('country')}: Germany <br /></div>
                            <div className="ml-4">{t('city')}: Ansbach <br /></div>
                            <div className="mr-96 ml-1">&#125;</div>
                        </span>
                    </div>
                </div>
                {/* <button
                    className={`hover-button ${isHoveredEN ? 'hovered' : ''}`}
                    onMouseEnter={handleHoverEN}
                    onMouseLeave={handleHoverEN}
                >
                    <span className="button-text">{isHoveredEN ? 'download' : 'CV-En'}</span>
                </button>

                <button
                    className={`hover-button ${isHoveredDE ? 'hovered' : ''} ml-2`}
                    onMouseEnter={handleHoverDE}
                    onMouseLeave={handleHoverDE}
                >
                    <span className="button-text">{isHoveredDE ? 'download' : 'CV-De'}</span>
                </button> */}
            </div>
            <div className="image-container">
                <img src={mypicture} alt="Bild" className="pictureHomePage" />
            </div>
        </div>

    )
}

export default Introduction
