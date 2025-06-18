
import { useState } from "react";
import { useFetchPokemonList } from "../hooks/useFetchPokemonList"
import { useFetchPokemonDetails } from "../hooks/useFetchPokemonDetails";

export default function HomePage () {

  const LIMIT :number = 12;
  const [offSet,setOffSet] = useState<number>(0);
  const [name,setName] = useState<string>("bulbasaur");


  const {pokemonsList} = useFetchPokemonList(LIMIT, offSet);
  const {pokemon} = useFetchPokemonDetails(name);




    return (
    <>
    <p>HomePage</p>

    <div>
          
           {pokemonsList.length === 0 ? 'No pokemons!':pokemonsList.map( (p,index) => <p key={index}>{p.name}</p>)} 
            <p>{pokemon?.description}</p>
          
    </div>
    </>
    )

}