import React, { useEffect, useRef, useState } from 'react';
import './styles/App.scss';
import i18n from './i18n';

// Визначення типу для опцій
interface Option {
  value: string;
  label: string;
  icon: string;
}

// Визначення типу пропсів для компонента
interface CustomDropdownProps {
  options: Option[];
  onLanguageChange: (lng: string) => void;
  selectedLanguage: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onLanguageChange, selectedLanguage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOptions = options.find(option => option.value === selectedLanguage) || options[0];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: Option) => {
    setIsOpen(false);
    onLanguageChange(option.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Додаємо глобальний обробник кліків
    document.addEventListener('mousedown', handleClickOutside);
    
    // Очищення обробника при розмонтуванні компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  /*const calculateRightPosition = (language: string) => {
    switch (language) {
      case 'uk':
        return '50px'; // для української мови
      case 'ru':
        return '20px'; // для російської мови
      case 'es':
        return '15px'; // для російської мови
      default:
        return '10px'; // для інших мов (за замовчуванням)
    }
  };*/

  return (
    <div 
      className="dropdown-own header__dropdown" 
      ref={dropdownRef}
      
    >
      <div className="dropdown-own__selected" onClick={toggleDropdown}>
        <span className="dropdown-own__flag" style={{ backgroundImage: `url(${selectedOptions.icon})` }}></span>
        <span className="dropdown-own__label">{selectedOptions.label}</span>
        <span className="dropdown-own__arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className="dropdown-own__list">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-own__item"
              onClick={() => {
                selectOption(option);
                i18n.changeLanguage(option.value);
              } }
            >
              <span className="dropdown-own__flag" style={{ backgroundImage: `url(${option.icon})` }}></span>
              <span className="dropdown-own__label">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};