import { NO_RESULTS_TEXT } from "../../data/appTexts";
import type { PokemonCardDetails } from "../../types/pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import { CardGridWrapper } from "./CardGrid.styles";

interface CardGridProps {
  pokemonsList: PokemonCardDetails[];
  setSelectedName: React.Dispatch<React.SetStateAction<string>>;
}

export default function CardGrid({
  pokemonsList,
  setSelectedName,
}: CardGridProps) {
  return (
    <CardGridWrapper>
      {pokemonsList.length === 0 ? (
        <h1>{NO_RESULTS_TEXT}</h1>
      ) : (
        pokemonsList.map((p) => (
          <PokemonCard
            key={p.id}
            name={p.name}
            imgUrl={p.sprites.front_default}
            index={p.id}
            isPokemonDetails={false}
            selectedPokemon={null}
            setSelectedName={setSelectedName}
            pokemon={p}
          />
        ))
      )}
    </CardGridWrapper>
  );
}
