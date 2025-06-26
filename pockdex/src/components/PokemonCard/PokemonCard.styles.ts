import styled from "styled-components";

interface CardProps {
  $isPokemonDetails: boolean;
}

interface TypeProps {
  $typeName: string;
}

export const Card = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.colors.lightGray};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  max-width: 255px;

  height: ${({ $isPokemonDetails }) => ($isPokemonDetails ? "780px" : "255px")};

  border-radius: 10px;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;

    justify-content: center;

    max-width: ${({ $isPokemonDetails }) =>
      $isPokemonDetails ? "650px" : "255px"};

    height: ${({ $isPokemonDetails }) =>
      $isPokemonDetails ? "400px" : "255px"};

    padding-left: ${({ $isPokemonDetails }) =>
      $isPokemonDetails ? "40px" : ""};
    padding-right: ${({ $isPokemonDetails }) =>
      $isPokemonDetails ? "20px" : ""};
  }
`;

export const Span = styled.span<CardProps>`
  font-size: ${({ $isPokemonDetails }) =>
    $isPokemonDetails ? "32px" : "22px"};
  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const Image = styled.img<CardProps>`
  height: ${({ $isPokemonDetails }) => ($isPokemonDetails ? "220px" : "180px")};
  width: ${({ $isPokemonDetails }) => ($isPokemonDetails ? "220px" : "180px")};
`;

export const FirstContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TypesWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8%;
`;

export const TypeBox = styled.div<TypeProps>`
  border-radius: 9px;
  padding: 5px 20px;
  width: 40px;
  text-align: center;
  background-color: ${({ $typeName, theme }) =>
    theme.colors.typeColors[$typeName]};
  color: ${({ theme }) => theme.colors.white};
`;

export const DividerLine = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  width: 80%;
  height: 1px;
  margin: 30px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 1px;
    height: auto;
    min-height: 300px;
    margin: 0 24px;
  }
`;

export const SecondContentWrapper = styled.div`
  color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    margin-top: 40px;
  }
`;

export const SpanTitle = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 22px;
  font-weight: 500;
`;

export const SpanPokemonIndex = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 22px;
  font-weight: 400;
  position: absolute;
  top: 10px;
  left: 16px;
`;

export const DescriptionContent = styled.p`
  padding: 0 15px;
  max-width: 240px;
  font-size: 17px;
  font-weight: 400;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    padding: 0;
    max-width: 340px;
  }
`;

export const StatsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 9px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  }
`;

export const StatColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;
