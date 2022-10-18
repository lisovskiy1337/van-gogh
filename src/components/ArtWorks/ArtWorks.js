import React from 'react'
import { ArtWorksStyled } from './ArtWorksStyle'
import Fade from 'react-reveal/Fade';

const ArtWorks = () => {
  return (
    <ArtWorksStyled>
        <Fade right delay={300}>
            <div>
                <div>
                    <p>Nuenen and Antwerp</p>
                    <span>1883</span>
                </div>
                <p>painting intern</p>
            </div>
        </Fade>
        <Fade right delay={500}>
        <div>
            <div>
                <p>PAris</p>
                <span>1886</span>
            </div>
            <p>Junior Painter</p>
        </div>
        </Fade>
        <Fade right delay={700}>
        <div>
            <div>
                <p>Gauguin's visit</p>
                <span>1888</span>
            </div>
            <p>Experimental artist</p>
        </div>
        </Fade>
        <Fade right delay={900}>
        <div>
            <div>
                <p>Saint-Rémy</p>
                <span>1889</span>
            </div>
            <p>Senior Painter</p>
        </div>
        </Fade >
        <Fade right delay={1100}>
        <div>
            <div>
                <p>Auvers-sur-Oise</p>
                <span>1890</span>
            </div>
            <p>painting studio manager</p>
        </div>
        </Fade>
    </ArtWorksStyled>
  )
}

export default ArtWorks