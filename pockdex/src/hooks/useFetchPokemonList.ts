
import { useEffect, useState } from "react";
import { getPokemonByName, getPokemonsList } from "../services/api";
import type { PokemonBasic, PokemonCardDetails } from "../types/pokemon";

 export const useFetchPokemonList = ( limit: number, offSet:number) => {

    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>("");
    const [pokemonsList,setPokemonsList] = useState<PokemonCardDetails[]>([]);
    useEffect(() => {

    const fetchData = async () => {
        try {
              setIsLoading(true);
              const basicData : PokemonBasic[] = await getPokemonsList(limit,offSet);


              const detailedData : PokemonCardDetails[] =  await Promise.all(
                basicData.map(p =>  getPokemonByName(p.name))
              );
              
              setPokemonsList(prev => [ ...prev, ...detailedData ]); 
        } catch (error) {
            setError('Fetch failed');
        }finally{
          setIsLoading(false);    
        }
    }

    fetchData();
    
    },[offSet]);

    return {isLoading,error,pokemonsList};


 }

 