import React, { createContext, useMemo } from 'react'
import { useState } from 'react';

export const IsMenuOpenContext = createContext({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
});

const IsMenuOpenObserver = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const value = useMemo(
        () => ({ isMenuOpen, setIsMenuOpen }), 
        [isMenuOpen]
      );
    return (
        <IsMenuOpenContext.Provider value={value}>
            {children}
        </IsMenuOpenContext.Provider>
    )
 
}



export default IsMenuOpenObserver