import React from 'react'
import Burger from '../Burger/Burger';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const Header = () => {   

  return (
    <header className="header">
        <Logo/>
        <div className="header__right">
            <DarkModeToggle/>
            <Burger>
                <Menu/>
            </Burger>  
        </div>
    </header>
  )
}

export default Header