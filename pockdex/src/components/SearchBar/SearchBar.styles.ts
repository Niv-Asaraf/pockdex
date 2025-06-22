
import styled from "styled-components";

export const SearchWarpper = styled.div`
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top:65px;
`;

export const SearchBox = styled.div`
    display: flex;
    gap:10px;
`;

export const SearchInput =styled.input`
                border-color: ${({theme})=>theme.colors.darkBlue};
                color: ${({theme})=>theme.colors.lightBlue};
                padding: 7px 0px;
                border: 1px solid;
                border-radius: 9px;
                background-color:${({theme})=>theme.colors.lightGray};
                font-size: 21px;
                width: 240px;

                 @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                  padding: 7px 23px;
                  width:300px;
                 };
`;

export const SearchButton = styled.button `
                padding: 9px;
                background-color: ${({theme})=>theme.colors.lightBlue};
                color: ${({theme})=>theme.colors.white};
                border-radius: 9px;
                font-size: 18px;
                width:87px;
`;

interface HistoryWrapperProps {
  open : boolean;
}

export const HistoryWrapper = styled.div<HistoryWrapperProps>`

            background-color: ${({theme})=>theme.colors.white};
            padding: 20px;
            border-radius: 9px;
            min-height: 100px;
            box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
            display: ${ ( {open} ) => !open? 'none' : '' };

            width:200px;
            margin-right: 95px;

            @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
             width:302px;
            margin-right: 92px;
            };
          
`;

export const RecentSearchWrapper = styled.div`
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            font-weight: 500;
            color: ${ ( { theme } ) => theme.colors.lightBlue }; 
            margin-bottom: 10px;
`;

export const ClearButton = styled.button `
                        background-color: ${ ({ theme }) => theme.colors.white };
                        border: none;
                        font-size: 12px;
                        font-weight: 700; 
                        color: ${ ({ theme }) => theme.colors.lightBlue };
                        cursor: pointer;
`;

export const ResultsWrapper = styled.div`
            color: #5A5A89;
            display: flex;
            justify-content: space-between;
            margin-top: 9px;
            font-size: 14px;
`;

export const Result = styled.span`
            cursor: pointer;
`;

export const DeleteButton = styled.button`
            background-color: ${ ({ theme }) => theme.colors.white };
            border: none;
            color: ${ ({ theme }) => theme.colors.lightBlue };
            cursor: pointer;      
`;