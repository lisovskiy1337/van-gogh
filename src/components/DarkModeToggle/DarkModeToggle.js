import React, {useContext} from 'react'
import { DarkModeContext } from '../../utils/DarkModeObserver';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const handleDarkmode =  () => {
      setIsDarkMode(!isDarkMode);
  }
  return (
    <button className="header__theme-toggle" onClick={handleDarkmode}>
        <div className="light-circle"></div>
        <div className="dark-circle"></div>
    </button>
  )
}

export default DarkModeToggle