import styled from 'styled-components'

export const ImgScreenStyled = styled.div`
    margin: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    & img {
        width: ${p => p.fullw ? '100%' : 'auto'};
        max-width: ${p => p.maxW ? '100%' : 'none'} ;
        border-radius: 20px;
    }
`