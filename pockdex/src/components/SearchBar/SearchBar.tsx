import { useEffect, useRef, useState } from "react";
import {
  ClearButton,
  DeleteButton,
  HistoryWrapper,
  RecentSearchWrapper,
  Result,
  ResultsWrapper,
  SearchBox,
  SearchButton,
  SearchInput,
  SearchWarpper,
} from "./SearchBar.styles";

interface SearchBarProps {
  onSearch: (term: string) => void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchHistory: string[];
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SearchBar({
  onSearch,
  searchInput,
  setSearchInput,
  searchHistory,
  setSearchHistory,
}: SearchBarProps) {
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const deleteOneSearchHistory = (index: number) => {
    const newSearchHistory = searchHistory.filter(
      (s) => searchHistory[index] !== s
    );
    setSearchHistory([...newSearchHistory]);
    if (newSearchHistory.length === 0) {
      setIsSearchOpen(false);
    }
  };
  const hanleRecentResultsDisplay = (value: boolean): void => {
    if (value && searchHistory.length > 0) {
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
    }
  };

  const clearAllHistory = (): void => {
    setSearchHistory([]);
    setIsSearchOpen(false);
  };

  return (
    <SearchWarpper ref={searchWrapperRef}>
      <SearchBox>
        <SearchInput
          type="text"
          value={searchInput}
          maxLength={22}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => hanleRecentResultsDisplay(true)}
        />
        <SearchButton onClick={() => onSearch(searchInput)}>
          Search
        </SearchButton>
      </SearchBox>

      <HistoryWrapper open={isSearchOpen}>
        <RecentSearchWrapper>
          <span>RECENT SEARCHES</span>

          <ClearButton onClick={clearAllHistory}>CLEAR</ClearButton>
        </RecentSearchWrapper>

        {searchHistory.slice(-3).map((s, index) => (
          <ResultsWrapper key={index}>
            <Result onClick={() => onSearch(s)}>{s}</Result>
            <DeleteButton onClick={() => deleteOneSearchHistory(index)}>
              X
            </DeleteButton>
          </ResultsWrapper>
        ))}
      </HistoryWrapper>
    </SearchWarpper>
  );
}
