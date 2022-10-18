import styled from "styled-components";

export const ExperienceSectionStyle = styled.section`
    margin-top: 120px;
    display: flex;
    gap: 6rem;
    align-items: center;
    justify-content: space-between;

    & img {
        margin-left: 5%;
    }

    @media screen and (max-width: 1100px){   
        gap: 4rem;

        & img {
            margin-left: 0;
            max-width: 50%;
        }
    }
    @media screen and (max-width: 867px){
        margin-top: 60px;
        gap: 2rem;

    }
    @media screen and (max-width: 650px){
        flex-wrap: wrap;
        justify-content: center;

        & img {
            max-width: 100%;
        }
    }
`