import styled from "styled-components";


export const HomeTitleStyle = styled.h1`
    font-weight: 500;
    font-size: 5rem;
    line-height: 88px;
    text-transform: uppercase;
    margin-top: 176px;
    @media screen and (max-width: 992px){
        margin-top: 96px;
        word-wrap: break-word;
        hyphens: auto;
        font-size: 3rem;
        line-height: 140%;
    }

    @media screen and (max-width: 580px){
        font-size: 2.5rem;
    }

`

export const HomeSubtitleStyle = styled.h2`
    font-size: 1.5rem;
    line-height: 125%;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 48px;
    
    @media screen and (max-width: 580px){
        font-size: 1.25rem;
    }

`