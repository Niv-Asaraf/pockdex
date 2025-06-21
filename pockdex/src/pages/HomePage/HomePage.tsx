
import { useMemo, useState } from "react";
import { useFetchPokemonList } from "../../hooks/useFetchPokemonList";

import { HomePageWrapper, LoadMoreButton } from "./HomePage.styles";

import type { PokemonCardDetails } from "../../types/pokemon";

import CardGrid from "../../components/CardGrid/CardGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { useFetchPokemonDetails } from "../../hooks/useFetchPokemonDetails";
import PokemonTypeFilter from "../../components/PokemonTypeFilter/PokemonTypeFilter";


export default function HomePage () {

  const LIMIT :number = 12;
  const [offSet,setOffSet] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<PokemonCardDetails[] | null > (null);
  const [searchInput,setSearchInput] = useState <string> ("");
  const [searchHistory,setSearchHistory] = useState <string[]> ([]);
  const [selectedName,setSelectedName] = useState<string>("");
  const [selectedType, setSelectedType] = useState("all");
  const [showLoadButton, setShowLoadButton] = useState<boolean>(true);


  const {pokemonsList} = useFetchPokemonList(LIMIT, offSet);
  const {pokemon} = useFetchPokemonDetails(selectedName);

  const filteredList = useMemo(() => {
    const baseList = searchResults ?? pokemonsList;
    if (selectedType === "all") return baseList;
    return baseList.filter((p) =>
      p.types?.some((t) => t.type.name.toLowerCase() === selectedType.toLowerCase())
    );
  }, [searchResults, pokemonsList, selectedType]);
  
  const loadMorePokemons = () =>{
        setOffSet((prev) => prev + LIMIT);
  };
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
  };

  const addToSearchHistory = (searchValue: string) =>{
    if( searchHistory.includes( searchValue.toLowerCase() ) ) return;
    setSearchHistory( prev => [ ...prev, searchValue ] );
  };

    return (
      <>

            <HomePageWrapper >
       {
          selectedName ===""&&
          <>
          <SearchBar onSearch={handleSearch} searchInput={searchInput} 
                     setSearchInput={setSearchInput}
                     searchHistory={searchHistory} setSearchHistory={setSearchHistory}/>

          <PokemonTypeFilter selectedType={selectedType} 
                             onChangeType={ (typeValue) => setSelectedType(typeValue) }/>
          </>
       } 
      
      {
        pokemon && selectedName !=="" ? (  <PokemonDetails selectedPokemon={pokemon} 
                                  setSelectedName={setSelectedName} setShowLoadButton={setShowLoadButton} /> )
        : ( <CardGrid 
          pokemonsList={filteredList}
                      setSelectedName={setSelectedName} /> )
      }
      
      
      {
      searchResults? (<LoadMoreButton onClick={()=>setSearchResults(null)}>Back to all</LoadMoreButton>)
        :
        ( showLoadButton && <LoadMoreButton onClick={loadMorePokemons}>Load more...</LoadMoreButton>)
      }

    </HomePageWrapper>
          </>

    )

}