import React from 'react'
import { HeroContainerStyled, HeroCurrentPage, HeroTitle } from '../HeroStaryNight/HeroStaryNightStyle'
import { HeroNightCafeStyled } from './HeroNightCafeStyle'

const HeroNightCafe = ({Bg, text, textColor}) => {
  return (
    <HeroNightCafeStyled Bg={Bg}>
    <HeroContainerStyled>
      <HeroTitle textColor={textColor}>I have tried to express the terrible passions of humanity by means of red and purple</HeroTitle>
    </HeroContainerStyled>
    <HeroCurrentPage>2. The night café</HeroCurrentPage>
  </HeroNightCafeStyled>
  )
}

export default HeroNightCafe