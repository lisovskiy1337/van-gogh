import React, { createContext, useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const DarkModeContext = createContext({
    isDarkMode: false,
    setIsDarkMode: () => {},
});

const DarkModeObserver = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(window.localStorage.getItem('darkmode')));
    const value = useMemo(
        () => ({ isDarkMode, setIsDarkMode }), 
        [isDarkMode]
      );

      useEffect(() => {  
        window.localStorage.setItem('darkmode', JSON.stringify(isDarkMode));
        
        if(!isDarkMode && document.querySelector('body')){
            document.querySelector('body').classList.add('light-theme');   
        }
        else if(isDarkMode && document.querySelector('body')){
            document.querySelector('body').classList.remove('light-theme');
        }
        setIsDarkMode(JSON.parse(window.localStorage.getItem('darkmode')));
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    )
 
}

export default DarkModeObserver