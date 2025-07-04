import { useEffect, useMemo, useState } from "react";
import { useFetchPokemonList } from "../../hooks/useFetchPokemonList";

import {
  HomePageWrapper,
  LoadMoreButton,
  MoreAndLessWrapper,
} from "./HomePage.styles";

import type { PokemonCardDetails } from "../../types/pokemon";

import CardGrid from "../../components/CardGrid/CardGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { useFetchPokemonDetails } from "../../hooks/useFetchPokemonDetails";
import PokemonTypeFilter from "../../components/PokemonTypeFilter/PokemonTypeFilter";
import {
  BACK_TO_ALL_BUTTON,
  LOAD_LESS_BUTTON,
  LOAD_MORE_BUTTON,
} from "../../data/appTexts";

export default function HomePage() {
  const LIMIT: number = 12;
  const [offSet, setOffSet] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<
    PokemonCardDetails[] | null
  >(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");
  const [selectedType, setSelectedType] = useState("all");
  const [showLoadButton, setShowLoadButton] = useState<boolean>(true);

  const { pokemonsList } = useFetchPokemonList(LIMIT, offSet);
  const { pokemon } = useFetchPokemonDetails(selectedName);

  const [displayList, setDisplayList] = useState<PokemonCardDetails[]>([]);
  const [displayCount, setDisplayCount] = useState<number>(12);

  useEffect(() => {
    setDisplayList(pokemonsList);
  }, [pokemonsList]);

  const filteredList = useMemo(() => {
    const baseList = searchResults ?? displayList;
    if (selectedType === "all") return baseList;
    return baseList.filter((p) =>
      p.types?.some(
        (t) => t.type.name.toLowerCase() === selectedType.toLowerCase()
      )
    );
  }, [searchResults, displayList, selectedType]);

  const loadMorePokemons = (): void => {
    if (displayCount + LIMIT <= pokemonsList.length) {
      const tempList = pokemonsList.slice(0, displayCount + LIMIT);
      setDisplayList(tempList);
    } else {
      setOffSet((prev) => prev + LIMIT);
    }
    setDisplayCount((prev) => prev + LIMIT);
  };

  const loadLessPokemons = (): void => {
    const tempList = displayList.slice(0, displayCount - LIMIT);
    setDisplayList(tempList);
    setDisplayCount((prev) => prev - LIMIT);
  };

  const isNumericValue = (value: string): boolean => !isNaN(Number(value));

  const handleSearch = (searchValue: string): void => {
    const cleanValue: string = searchValue.trim();
    if (cleanValue === "") return;

    const resultsList = displayList.filter((p) =>
      isNumericValue(cleanValue)
        ? p.id.toString().includes(cleanValue)
        : p.name.includes(cleanValue.toLowerCase())
    );

    setSearchResults(resultsList);
    addToSearchHistory(cleanValue);
  };

  const addToSearchHistory = (searchValue: string) => {
    if (searchHistory.includes(searchValue.toLowerCase())) return;
    setSearchHistory((prev) => [...prev, searchValue]);
  };

  const handleBackToAll = (): void => {
    setSearchResults(null);
    setSearchInput("");
  };

  return (
    <>
      <HomePageWrapper>
        {selectedName === "" && (
          <>
            <SearchBar
              onSearch={handleSearch}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchHistory={searchHistory}
              setSearchHistory={setSearchHistory}
            />

            <PokemonTypeFilter
              selectedType={selectedType}
              onChangeType={(typeValue) => setSelectedType(typeValue)}
            />
          </>
        )}

        {pokemon && selectedName !== "" ? (
          <PokemonDetails
            selectedPokemon={pokemon}
            setSelectedName={setSelectedName}
            setShowLoadButton={setShowLoadButton}
          />
        ) : (
          <CardGrid
            pokemonsList={filteredList}
            setSelectedName={setSelectedName}
          />
        )}

        {searchResults ? (
          <LoadMoreButton onClick={handleBackToAll}>
            {BACK_TO_ALL_BUTTON}
          </LoadMoreButton>
        ) : (
          showLoadButton && (
            <MoreAndLessWrapper>
              <LoadMoreButton onClick={loadMorePokemons}>
                {LOAD_MORE_BUTTON}
              </LoadMoreButton>
              {displayCount > LIMIT && (
                <LoadMoreButton onClick={loadLessPokemons}>
                  {LOAD_LESS_BUTTON}
                </LoadMoreButton>
              )}
            </MoreAndLessWrapper>
          )
        )}
      </HomePageWrapper>
    </>
  );
}
