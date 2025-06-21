
import styled from "styled-components";

interface CardProps {
$ispokemondetails: boolean;
}

interface TypeProps {
$typeName: string;
}

export const Card = styled.div <CardProps>`

    background-color:${({theme})=>theme.colors.lightGray};
    display: flex;

    flex-direction: column;

    justify-content: flex-start;

    align-items: center;
    width:100%;
    margin: 0 auto;

    max-width: 255px;

    height: ${({$ispokemondetails})=> $ispokemondetails? '780px':'255px'};

    border-radius: 10px ;
    box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.3);  
    
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    
    flex-direction: row;                    //Web

    justify-content: center;               //Web

    max-width: ${({$ispokemondetails})=> $ispokemondetails? '650px':'255px'};               //Web

    height: ${({$ispokemondetails})=> $ispokemondetails? '400px':'255px'};                  //Web

    padding-left:${({$ispokemondetails})=> $ispokemondetails? '40px':''};                   //Web
    padding-right:${({$ispokemondetails})=> $ispokemondetails? '20px':''};                  //Web

    };
`;

export const TopContentWrapper = styled.div`
    width: 90%;
    text-align: left;
`;

export const Span = styled.span<CardProps>`
    font-size: ${({$ispokemondetails})=> $ispokemondetails? '32px':'22px'};
    color: ${({theme})=>theme.colors.lightBlue};
    `;

export const Image = styled.img <CardProps>`
    // height:${({$ispokemondetails})=> $ispokemondetails? '90%':'70%'};
    // width: ${({$ispokemondetails})=> $ispokemondetails? '50%':'60%'};

    height:${({$ispokemondetails})=> $ispokemondetails? '220px':'180px'};
    width: ${({$ispokemondetails})=> $ispokemondetails? '220px':'180px'};

    // object-fit:contain;
`;

export const FirstContentWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const TypesWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top:8%;
`;

export const TypeBox = styled.div<TypeProps>`
    border-radius: 9px;
    padding: 5px 20px;
    width: 40px;
    text-align: center;
    background-color: ${({$typeName,theme})=>theme.colors.typeColors[$typeName]};
    color: ${({theme})=>theme.colors.white};
`;

export const DividerLine = styled.div`

  background-color: ${({theme})=>theme.colors.lightBlue};
  width: 80%;
  height: 1px;
  margin: 30px 0;

  @media (min-width: 768px) {
    width: 1px;
    height: auto;
    min-height: 300px; 
    margin: 0 24px;
  };
`;

export const SecondContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme})=>theme.colors.lightBlue};
`;

export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 20px;
`;

export const SpanTitle = styled.span`
color: ${({theme})=>theme.colors.lightBlue};
font-size: 22px;
font-weight: 500;
`;

export const DescriptionContent = styled.p`
  padding: 0 22px;
  font-size: 18px;
  font-weight: 400;
`;

export const StatsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;


