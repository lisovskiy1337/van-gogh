import React from 'react'
import { TextBlockH2Styled, TextBlockH4Styled, TextBlockStyled } from './TextBlockStyle'
import Fade from 'react-reveal/Fade';

const TextBlock = () => {
  return (
    <TextBlockStyled>
        <Fade>
          <TextBlockH2Styled>Although The Starry Night was painted during the day in Van Gogh's 
              ground-floor studio, it would be inaccurate to state that the picture was painted from memory.
          </TextBlockH2Styled>
        </Fade>
        <Fade delay={500}>
          <TextBlockH4Styled>The view has been identified as the one from his bedroom window, facing east, 
              a view which Van Gogh painted variations of no fewer than twenty-one times, 
              including The Starry Night. 
          </TextBlockH4Styled>
        </Fade>
     
    </TextBlockStyled>
  )
}

export default TextBlock