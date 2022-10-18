import styled from "styled-components";

export const TextBlockStyled = styled.div`
    margin: 60px 0;
    padding: 0 2rem;
`

export const TextBlockH2Styled = styled.h2`
    font-weight: 500;
    font-size: 4.5rem;
    line-height: 125%;
    text-transform: uppercase;

    @media screen and (max-width: 992px){
        font-size: 3.5rem;
    }

    @media screen and (max-width: 768px){
        font-size: 3rem;
    }

    @media screen and (max-width: 580px){
        font-size: 2.5rem;
    }
`

export const TextBlockH4Styled = styled.h4`
font-weight: 500;
font-size: 2rem;
line-height: 125%;
margin-top: 4rem;
text-transform: uppercase;

@media screen and (max-width: 580px){
    font-size: 1.5rem;
}


`