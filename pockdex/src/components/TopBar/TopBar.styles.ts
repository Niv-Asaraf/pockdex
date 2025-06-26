import styled from "styled-components";

export const Wrapper = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    height: 8vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img`
  height: 90px;
  width: 250px;
  margin-top: 55px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0.3%;
    margin-left: 9%;

    margin-top: 6px;
    margin-left: 128px;
    height: 54px;
    width: 150px;
  }
`;

export const ButtonGroup = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: flex-start;
    height: 100%;
    margin-right: 10%;
  }
`;

interface NavButtonProps {
  $active: boolean;
}

export const NavButton = styled.button<NavButtonProps>`
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.green : theme.colors.darkBlue};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.white};
  border: none;
  padding: 15%;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.hoverGreen : theme.colors.hoverBlue};
  }
`;
