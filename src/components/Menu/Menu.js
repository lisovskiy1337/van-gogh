import React, {useContext} from 'react'
import { DarkModeContext } from '../../utils/DarkModeObserver';
import { IsMenuOpenContext } from '../../utils/isMenuOpenObserver';
import { Nav } from './MenuStyle'
import { WavyLink } from "react-wavy-transitions";

const menuArr = [
  {imgUrl : 'img-1.svg', name: 'THE STARRY NIGHT', link: 'starry-night'},
  {imgUrl : 'img-2.svg', name: 'THE NIGHT CAFÉ', link: 'night-cafe'},
  {imgUrl : 'img-3.svg', name: 'THE RED VINEYARD', link: 'coming-soon'},
  {imgUrl : 'img-4.svg', name: 'WARD IN THE HOSPITAL IN ARLES', link: 'coming-soon'},
  {imgUrl : 'img-5.svg', name: 'PLOUGHMAN IN THE FIELDS NEAR ARLES', link: 'coming-soon'},
  {imgUrl : 'img-6.svg', name: 'PAUL GAUGUIN`S ARMCHAIR', link: 'coming-soon'},
]

const Menu = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(IsMenuOpenContext);

  return (
    <Nav className='nav' isDarkMode={isDarkMode} isMenuOpen={isMenuOpen}>
      <ul>
        {menuArr.map((item, i) => (
            <WavyLink to={`/${item.link}`} color="#8f44fd"  key={i}>
              <li onClick={() => setIsMenuOpen(false)}>
                <img src={`/images/gallery/${item.imgUrl}`} alt="" />
                <div>
                  <span>{i + 1}.</span>
                  <p>{item.name}</p>
                  <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7724 0.477089L15.858 3.9339C16.0473 4.14603 16.0473 4.48996 15.858 4.70208L12.7724 8.1589C12.5831 8.37102 12.2761 8.37102 12.0868 8.1589C11.8974 7.94677 11.8974 7.60284 12.0868 7.39072L14.3446 4.86118H0V3.77481H14.3446L12.0868 1.24527C11.8974 1.03314 11.8974 0.689216 12.0868 0.477089C12.2761 0.264961 12.5831 0.264961 12.7724 0.477089Z" fill="white"/>
                  </svg>
                </div>
              </li>
            </WavyLink>         
          )
        )}
      </ul>
    </Nav>
  )
}

export default Menu