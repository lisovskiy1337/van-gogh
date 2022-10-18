import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { DarkModeContext } from '../../utils/DarkModeObserver';
import { IsMenuOpenContext } from '../../utils/isMenuOpenObserver';
import { StyleBurger } from './BurgerStyle'

const Burger = ({children} ) => {
  const ref = useRef(null);
  const { isDarkMode } = useContext(DarkModeContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(IsMenuOpenContext);
  
  const handleClick = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsMenuOpen(false);
        if (isMenuOpen && event.target.closest('.header__theme-toggle')) {
          setIsMenuOpen(true);
        }
    }
  }, [setIsMenuOpen, isMenuOpen]); 
 
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [handleClickOutside]);

  return (
    <StyleBurger 
      isDarkMode={isDarkMode} 
      isMenuOpen={isMenuOpen} 
      className={`hamburger hamburger--minus ${isMenuOpen ? 'is-active' : ''}`} 
      ref={ref}
    >
      <div className="hamburger-box" onClick={handleClick}>
          <div className="hamburger-inner"></div>
      </div>
      {children}
    </StyleBurger>
  )
}

export default Burger