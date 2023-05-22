import React, { useState } from 'react';
import './LanguageBTN.scss';
import { GrLanguage } from 'react-icons/gr';

interface ButtonWithOptionsProps {
  options: string[];
}

const ButtonWithOptions: React.FC<ButtonWithOptionsProps> = ({ options }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <div className='nav-item text-white'>
        <GrLanguage onClick={handleButtonClick} size={40} className='text-white' />Language
      </div>
      {showOptions && (
        <div>
          {options.map((option, index) => (
            <p key={index}>{option}</p>
          ))}

        </div>
      )}
    </div>
  );
};

export default ButtonWithOptions;
