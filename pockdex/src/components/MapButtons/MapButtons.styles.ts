import styled from "styled-components";

interface MapButtonProps {
  $selectedMode: string;
}
export const MapButton = styled.button<MapButtonProps>`
  background-color: ${({ $selectedMode, theme }) =>
    $selectedMode === "TRANSIT" ? theme.colors.green : theme.colors.lightGray};
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 20px;
  cursor: pointer;
`;
