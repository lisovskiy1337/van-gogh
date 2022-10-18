import React from 'react'
import { FWImgSectionStyled } from './FullWidthImgSectionStyle'

const FullWidthImgSection = ({children, BgUrl, BgColor}) => {
  return (
    <FWImgSectionStyled BgUrl={BgUrl} BgColor={BgColor}>{children}</FWImgSectionStyled>
  )
}

export default FullWidthImgSection