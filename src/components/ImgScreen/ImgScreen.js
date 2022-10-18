import React from 'react'
import { ImgScreenStyled } from './ImgScreenStyle'

const ImgScreen = ({children, fullw, maxW}) => {
  return (
    <ImgScreenStyled maxW={maxW} fullw={fullw}>
        {children}
    </ImgScreenStyled>
  )
}

export default ImgScreen