import styled from "styled-components";

export const CardGridWrapper = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 2rem;
  column-gap: 1rem;
  justify-items: center;
  padding: 0 1rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
`;
