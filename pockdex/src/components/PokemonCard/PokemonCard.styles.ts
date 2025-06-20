
import styled from "styled-components";

export const Card = styled.div `
    background-color:${({theme})=>theme.colors.lightGray};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    margin: 0 auto;
    max-width: 255px;
    height: 255px;
    border-radius: 10px ;
    box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.3);         
`;

export const TopContentWrapper = styled.div`
    width: 90%;
    text-align: left;
`;
export const Span = styled.span`
    font-size: 22px;
    color: ${({theme})=>theme.colors.lightBlue};
    `
export const Image = styled.img`
    height:70%;
    object-fit:contain;
`