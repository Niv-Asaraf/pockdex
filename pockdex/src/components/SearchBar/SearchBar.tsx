
import { ClearButton, DeleteButton, HistoryWrapper, RecentSearchWrapper, Result, ResultsWrapper, SearchBox, SearchButton, SearchInput, SearchWarpper } from "./SearchBar.styles";


interface SearchBarProps{ 
    onSearch : (term: string) => void;
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    searchHistory: string[];
    setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SearchBar ( {  onSearch, searchInput, setSearchInput ,searchHistory,setSearchHistory}: SearchBarProps ) {

    
    

    const deleteOneSearchHistory = (index:number) => {
        const newSearchHistory = searchHistory.filter(s=> searchHistory[index]!== s );
        setSearchHistory([...newSearchHistory]);
    }
    const isOpen = () :boolean => {
        return searchInput.trim() !== "" && searchHistory.length > 0;
    }
    const clearAllHistory = () :void =>{
        setSearchHistory([]);
    }
   
    return(
        <SearchWarpper >     
            <SearchBox >
                <SearchInput type="text" value={searchInput} maxLength={22}
                            onChange={(e)=>setSearchInput(e.target.value)} />
                <SearchButton onClick={()=>onSearch(searchInput)}>Search</SearchButton>
            </SearchBox>
            
            <HistoryWrapper open={isOpen()} >

            <RecentSearchWrapper>

                 <span>RECENT SEARCHES</span>

                   <ClearButton onClick={clearAllHistory} >CLEAR
                    </ClearButton>
             </RecentSearchWrapper>

            {

            searchHistory.slice(-3).map( (s,index) =>  

            <ResultsWrapper key={index} >
                <Result onClick={()=>onSearch(s)} >{s}</Result>
                <DeleteButton onClick={() => deleteOneSearchHistory(index)} >X</DeleteButton>
            </ResultsWrapper>) 

            }

            </HistoryWrapper>
        </SearchWarpper>
    )
}