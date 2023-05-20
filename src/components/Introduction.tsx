import React, { useState } from 'react'
import mypicture from './mustermann.jpg';
import { t } from 'i18next';
import './Introduction.scss';
const Introduction = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
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
                <button
                    className={`hover-button ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <span className="button-text">{isHovered ? 'download' : 'CV-English'}</span>
                </button>
            </div>
            <div className="image-container">
                <img src={mypicture} alt="Bild" className="pictureHomePage" />
            </div>
        </div>

    )
}

export default Introduction
