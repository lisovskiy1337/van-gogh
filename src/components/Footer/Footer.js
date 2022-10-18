import React from 'react'
import { useCallback } from 'react';
import { FooterGoTopStyled, FooterListStyled, FooterStyled } from './FooterStyle'

const Footer = () => {
    const handleScrollTop = useCallback(() => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }, []);

  return (
    <FooterStyled>
        <span>☻@vangogh.com</span>
        <FooterListStyled>
            <li>
                <a href="https://www.linkedin.com/in/vladyslav-lisovskiy329/" rel="noreferrer" target="_blank">
                    linkedin
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.88001 0.192789L11.6512 0.732544C11.944 0.765667 12.2081 1.02986 12.2413 1.32265L12.781 6.09381C12.8141 6.38659 12.6037 6.59709 12.3109 6.56396C12.0181 6.53084 11.7539 6.26664 11.7208 5.97386L11.3258 2.48255L1.48999 12.3184L0.655458 11.4838L10.4913 1.64802L6.99995 1.25305C6.70717 1.21992 6.44297 0.955727 6.40985 0.662945C6.37673 0.370163 6.58723 0.159667 6.88001 0.192789Z" fill="black" />
                    </svg>
                </a>          
            </li>
            <li>
                <a href="https://github.com/lisovskiy1337" rel="noreferrer" target="_blank">
                    Github
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.88001 0.192789L11.6512 0.732544C11.944 0.765667 12.2081 1.02986 12.2413 1.32265L12.781 6.09381C12.8141 6.38659 12.6037 6.59709 12.3109 6.56396C12.0181 6.53084 11.7539 6.26664 11.7208 5.97386L11.3258 2.48255L1.48999 12.3184L0.655458 11.4838L10.4913 1.64802L6.99995 1.25305C6.70717 1.21992 6.44297 0.955727 6.40985 0.662945C6.37673 0.370163 6.58723 0.159667 6.88001 0.192789Z" fill="black" />
                    </svg>
                </a>        
            </li>
            <li>
                <a href="https://t.me/liquid_stool" rel="noreferrer" target="_blank">
                    Telegram
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.88001 0.192789L11.6512 0.732544C11.944 0.765667 12.2081 1.02986 12.2413 1.32265L12.781 6.09381C12.8141 6.38659 12.6037 6.59709 12.3109 6.56396C12.0181 6.53084 11.7539 6.26664 11.7208 5.97386L11.3258 2.48255L1.48999 12.3184L0.655458 11.4838L10.4913 1.64802L6.99995 1.25305C6.70717 1.21992 6.44297 0.955727 6.40985 0.662945C6.37673 0.370163 6.58723 0.159667 6.88001 0.192789Z" fill="black" />
                    </svg>
                </a>   
            </li>
        </FooterListStyled>
        <FooterGoTopStyled onClick={handleScrollTop}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
	            <path fillRule="evenodd" clipRule="evenodd" d="M0.158912 3.47757L3.61573 0.392008C3.82785 0.202663 4.17178 0.202663 4.38391 0.392008L7.84072 3.47757C8.05285 3.66691 8.05285 3.9739 7.84072 4.16324C7.62859 4.35259 7.28467 4.35259 7.07254 4.16324L4.543 1.90538L4.543 11.25L3.45663 11.25L3.45663 1.90538L0.927093 4.16324C0.714966 4.35259 0.371039 4.35259 0.158912 4.16324C-0.0532153 3.9739 -0.0532153 3.66691 0.158912 3.47757Z" fill="black" />
            </svg>
        </FooterGoTopStyled>
    </FooterStyled>
  )
}

export default Footer