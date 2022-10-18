import styled from "styled-components";


export const ArtWorksStyled = styled.div`
    flex: 0 1 45%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media screen and (max-width: 650px){
        flex: 1 0 auto;
    }
    
    & div {
        & div {
            display: flex;
            justify-content: space-between;
            gap: 1.25rem;

            & > p {
                font-weight: 500;
                font-size: 1.25rem;
                text-transform: uppercase;       
            }

            &  > span {
                font-weight: 500;
                font-size: 1.25rem;
                color: rgb(150,150,150);
            }
        }

        & p {
            margin-top: 5px;
            font-size: 0.8rem;
            text-transform: uppercase;
            font-weight: 400;
        }

    }
`