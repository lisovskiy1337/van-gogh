import styled from "styled-components";


export const SoonStyled = styled.div `
    background: var(--bkg-color);
    min-height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
           
    & h1 {
        font-size: 3.5rem;
        letter-spacing: 0.1rem;
    } 

    & .poker {
        stroke: #edf2f6;
        animation: dashoffset 10s both infinite, fill-opacity 10s both infinite, stroke-opacity 10s both infinite;
        stroke-dasharray: 500%;
        stroke-dashoffset: 500%;
        width: 250px;
        height: 250px;
    }

    @keyframes stroke-opacity {

    2%,
    25% {
        stroke-opacity: .75;
        stroke-width: 2%
    }

    100%,
    75% {
        stroke-opacity: 0;
        stroke-width: 0
    }
    }

    @keyframes fill-opacity {

    10%,
    25% {
        fill-opacity: 0
    }

    0%,
    100%,
    50% {
        fill-opacity: 1
    }
    }

    @keyframes dashoffset {

    0%,
    2% {
        stroke-dashoffset: 500%
    }

    100% {
        stroke-dashoffset: 0%
    }
    }
`