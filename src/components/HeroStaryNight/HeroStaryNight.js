import React from 'react'
import { HeroContainerStyled, HeroCurrentPage, HeroStyled, HeroTitle } from './HeroStaryNightStyle'
import Fade from 'react-reveal/Fade';

const HeroStaryNight = ({Bg, text, textColor}) => {
  return (
    <HeroStyled Bg={Bg}>
      <HeroContainerStyled>
        <Fade duration={2000}>
          <HeroTitle textColor={textColor}>{text}</HeroTitle>
        </Fade>
      </HeroContainerStyled>
      <HeroCurrentPage>1. The STARRY NIGHT</HeroCurrentPage>
    </HeroStyled>
  )
}

export default HeroStaryNight