import styled from "styled-components";

export const HomePageWrapper = styled.div`
  text-align: center;
  margin-top: 7vh;
  margin-bottom: 5vh;
`;

export const LoadMoreButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};
  border-color: ${({ theme }) => theme.colors.lightBlue};
  border: 1px solid;
  border-radius: 9px;
  font-size: 18px;
  padding: 10px 30px;
  width: 250px;
`;

export const MoreAndLessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;
