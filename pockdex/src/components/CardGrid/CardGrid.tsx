
import type { PokemonCardDetails } from "../../types/pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import { CardGridWrapper } from "./CardGrid.styles";

interface CardGridProps {
  pokemonsList: PokemonCardDetails[];
}

export default function CardGrid({pokemonsList}: CardGridProps){
    return(
     <CardGridWrapper>
          {pokemonsList.length === 0 ? 'No pokemons!': pokemonsList.map( (p) => 
                  <PokemonCard key={p.id} name={p.name} imgUrl={p.sprites.front_default} index={p.id}/>)
            } 
        </CardGridWrapper>
    )
}
   