import React from 'react'
import { TableStyled } from './TableStyle';

const Table = ({children}) => {
  
  return (
    <TableStyled>
        <tbody>
            {children}
        </tbody>  
    </TableStyled>
  )
}

export default Table