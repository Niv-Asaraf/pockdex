
import styled from "styled-components";

export const FilterWrapper = styled.div`
margin-top: 20px;
`;

export const FilterLabel = styled.label`
margin-right: 8px;
color: ${({theme}) => theme.colors.lightBlue};
`;

export const FilterSelect = styled.select`
padding: 4px;
border-radius: 4px;
width: 100px;
color: ${({theme})=>theme.colors.lightBlue};
`;