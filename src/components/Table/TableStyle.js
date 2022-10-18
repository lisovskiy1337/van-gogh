import styled from "styled-components";

export const TableStyled = styled.table`
table-layout: fixed;
max-width: 50rem;
border-collapse: separate;
border-spacing: 0 1rem;
margin: 120px 0;
& tr {
   
}
& tr td{
    vertical-align: top;
    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
    
}
    & tr td:first-child{
       padding-right: 25px;
       color: rgb(150, 150, 150);
       text-transform: uppercase;
    }
    & tr td:nth-child(2){
       padding-right: 25px;
       min-width: 15rem;
    }

    @media screen and (max-width: 640px){
        margin: 60px 0;
        
        & tr td:first-child{
            padding-right: 15px;
        }
        & tr td:nth-child(2){
            padding-right: 15px;
            min-width: 0;
        }

        & tr td {
            width: 33.33%;
        }
    }
`