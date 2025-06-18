
import styled from 'styled-components';

export const Wrapper = styled.div`

  height:10vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color:${({theme})=>theme.colors.darkBlue};
    height:8vh;
    width:100vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
`;

export const Logo = styled.img`
margin-top:5%;
margin-left:29%;
margin-right:25%;
height:95%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   margin-top:0.3%;
   margin-left:9%;
   margin-right:0;
   height:85%;
  };
`;

export const ButtonGroup = styled.div`

    display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    color: ${({theme})=>theme.colors.white};
    display: flex;
    justify-content: flex-start;
    height:100%;
     margin-right:10%;
  };

`;

interface NavButtonProps {
  $active : boolean;
}

export const NavButton = styled.button<NavButtonProps>`
  background-color: ${({theme,$active})=> $active?theme.colors.green:theme.colors.darkBlue};
  color: ${({theme, $active}) => $active?theme.colors.black: theme.colors.white};
  border:none;
  padding:15%;

   &:hover {
    background-color:${({theme, $active})=> $active? theme.colors.hoverGreen: theme.colors.hoverBlue}
  };
   `;

