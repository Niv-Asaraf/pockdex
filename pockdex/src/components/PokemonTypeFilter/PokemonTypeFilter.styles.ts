
import styled from "styled-components";

export const FilterWrapper = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
gap: 15px;

@media (min-width: 768px) {
margin-right: 70px;
};

`;

export const FilterLabel = styled.label`
color: ${({theme}) => theme.colors.lightBlue};
`;

export const FilterSelect = styled.select`
padding: 4px;
border-radius: 4px;
width: 100px;
color: ${({theme})=>theme.colors.lightBlue};
`;