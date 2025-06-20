
import { useState } from "react";
import { useFetchPokemonList } from "../../hooks/useFetchPokemonList";

import { HomePageWrapper, LoadMoreButton } from "./HomePage.styles";
import CardGrid from "../../components/CardGrid/CardGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import type { PokemonCardDetails } from "../../types/pokemon";

// import { useFetchPokemonDetails } from "../hooks/useFetchPokemonDetails";

export default function HomePage () {

  const LIMIT :number = 12;
  const [offSet,setOffSet] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<PokemonCardDetails[] | null > (null);
  const [searchInput,setSearchInput] = useState <string> ("");
  const [searchHistory,setSearchHistory] = useState <string[]> ([]);

  // const [name,setName] = useState<string>("bulbasaur");

  const {pokemonsList} = useFetchPokemonList(LIMIT, offSet);
  // const {pokemon} = useFetchPokemonDetails(name);
  
  const loadMorePokemons = () =>{
        setOffSet((prev) => prev + LIMIT);
  }
   const isNumericValue = (value: string): boolean => !isNaN(Number(value));


  const handleSearch = (searchValue: string) :void => {

    const cleanValue:string = searchValue.trim();

    if ( cleanValue === "" ) return ;

    
    const resultsList = pokemonsList.filter( (p) => 
      isNumericValue(cleanValue)? p.id.toString().includes(cleanValue)
                                : p.name.includes(cleanValue.toLowerCase())
   );
    
    if(resultsList.length>0){
      setSearchResults(resultsList);
    }
    setSearchInput('');
    addToSearchHistory(cleanValue);
  }

  const addToSearchHistory = (searchValue: string) =>{
    if( searchHistory.includes( searchValue.toLowerCase() ) ) return;
    setSearchHistory( prev => [ ...prev, searchValue ] );
  }
 
    return (
      <HomePageWrapper >
        <SearchBar onSearch={handleSearch} searchInput={searchInput} setSearchInput={setSearchInput}
                  searchHistory={searchHistory} setSearchHistory={setSearchHistory}/>
      {/* <p>{pokemon?.description}</p> */}
      <CardGrid pokemonsList={searchResults? searchResults :pokemonsList}/>
      {

      searchResults? (<LoadMoreButton onClick={()=>setSearchResults(null)}>Back to all</LoadMoreButton>)
        :
        (<LoadMoreButton onClick={loadMorePokemons}>Load more...</LoadMoreButton>)
      }
    </HomePageWrapper>
    )

}