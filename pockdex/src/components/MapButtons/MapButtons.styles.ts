import styled from "styled-components";

interface MapButtonProps {
  $isSelected: boolean;
}

export const MapButton = styled.button<MapButtonProps>`
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.green : theme.colors.lightGray};
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
  position: absolute;
  top: 60px;
  right: 10px;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    top: 11px;
    right: 70px;
  }
`;
