import styled from "styled-components";


export const HeroNightCafeStyled = styled.section`
min-height: 100vh;
padding: 0 5%;
background: var(--bkg-color);
transition: var(--transition-delay);
position: relative;

&::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50%;
    background: url('/images/cafe-bg.svg') no-repeat top right fixed;
    background-size: cover; 
}

`