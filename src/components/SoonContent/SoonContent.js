import React from 'react'
import { SoonStyled } from './SoonContentStyle'

const SoonContent = () => {
  return (
      <SoonStyled>
        <h1>Coming soon...</h1>
        <svg className='poker' xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 36 36">
          <path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18" />
          <ellipse fill="#664500" cx="11.5" cy="16.5" rx="2.5" ry="3.5" />
          <ellipse fill="#664500" cx="24.5" cy="16.5" rx="2.5" ry="3.5" />
          <path fill="#664500" d="M25 26H11c-.552 0-1-.447-1-1s.448-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z" />
        </svg>
      </SoonStyled>  
  )
}

export default SoonContent