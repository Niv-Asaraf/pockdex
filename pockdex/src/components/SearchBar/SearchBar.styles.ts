
import styled from "styled-components";

export const SearchWarpper = styled.div`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: relative;
`;

export const SearchBox = styled.div`
    display: flex;
    margin-left: 5px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-left: 90px;
    };
`;

export const SearchInput =styled.input`
                border-color: ${({theme})=>theme.colors.darkBlue};
                padding: 7px 0px;
                border: 1px solid;
                border-radius: 9px;
                background-color:${({theme})=>theme.colors.lightGray};
                margin-bottom: 0.5vh;
                font-size: 21px;
                color: ${({theme})=>theme.colors.lightBlue};

                 @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                  padding: 7px 23px;
                 }
`;

export const SearchButton = styled.button `
                padding: 10px;
                margin-left: 15px;
                background-color: ${({theme})=>theme.colors.lightBlue};
                color: ${({theme})=>theme.colors.white};
                border-radius: 9px;
                font-size: 18px;
`;

interface HistoryWrapperProps {
  open : boolean;
}

export const HistoryWrapper = styled.div<HistoryWrapperProps>`

            background-color: ${({theme})=>theme.colors.white};
            position: absolute;
            top: 48px;
            padding: 20px;
            border-radius: 9px;
            min-height: 100px;
            box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
            // display: !isOpen()?'none':'',
            display: ${ ( {open} ) => !open? 'none' : '' };
`;

export const RecentSearchWrapper = styled.div`
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
            font-size: 16px;
            font-weight: bold;
            color: ${ ( { theme } ) => theme.colors.lightBlue }; 
            margin-bottom: 8px;
`;

export const ClearButton = styled.button `
                        background-color: ${ ({ theme }) => theme.colors.white };
                        border: none;
                        font-size: 16px;
                        font-weight: bold;
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