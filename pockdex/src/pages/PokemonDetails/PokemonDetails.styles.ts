
import styled from "styled-components";

export const BackHomeButton = styled.button`
    position: absolute;
    top: -30px;
    left: 30px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color:${({theme})=>theme.colors.darkBlue};
`;

export const CardDetailsWrapper= styled.div`
    position: relative;
`;