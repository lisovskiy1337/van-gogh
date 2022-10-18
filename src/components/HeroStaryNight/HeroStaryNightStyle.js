import styled from "styled-components";

export const HeroStyled = styled.section`
    min-height: 100vh;
    padding: 0 5%;
    background: ${p => p.Bg ? `url(${p.Bg}) no-repeat center center fixed` : 'var(--bkg-color)'};
    background-size: cover;
    position: relative;
`

export const HeroContainerStyled = styled.div`
    min-height: inherit;
    width: 100%;
    display: grid;
    place-items: center;
`

export const HeroTitle = styled.h1`
    text-align: center;
    color: ${p => p.textColor ? p.textColor : 'var(--text-color)'};
    font-size: 4.25rem;
    max-width: 60rem;
    text-transform: uppercase;
    line-height: 140%;
    position: relative;
    z-index: 2;
    transition: var(--transition-delay);

    @media screen and (max-width: 1024px){
        font-size: 3rem;
    }

    @media screen and (max-width: 768px){
        font-size: 2.5rem;
    }

    @media screen and (max-width: 420px){
        font-size: 2rem;
    }
    
`

export const HeroCurrentPage = styled.div`
    position: absolute;
    left: 3%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-180deg) ;
    writing-mode: tb-rl;
    text-transform: uppercase;
    font-size: 0.9rem;
`