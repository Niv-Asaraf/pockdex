import { useEffect, useRef, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import type { PokemonFullDetails } from "../../types/pokemon";
import {
  BackHomeButton,
  CardDetailsWrapper,
  ShowDirectionsButton,
} from "./PokemonDetails.styles";
import MapView from "../../components/MapView/MapView";

interface PokemonDetailsProps {
  setSelectedName: React.Dispatch<React.SetStateAction<string>>;
  setShowLoadButton: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPokemon: PokemonFullDetails;
}
type Coordinates = {
  lat: number;
  lng: number;
};
export default function PokemonDetails({
  setSelectedName,
  selectedPokemon,
  setShowLoadButton,
}: PokemonDetailsProps) {
  const [isMapShow, setIsMapShow] = useState<boolean>(false);
  const [location, setLocation] = useState<Coordinates>({
    lat: 32.07477235615735,
    lng: 34.792342277259536,
  });

  const locationGenerated = useRef<boolean>(false);

  useEffect(() => {
    setShowLoadButton(false);
  }, []);

  useEffect(() => {
    if (isMapShow && !locationGenerated.current) {
      const randomLocation = generateRandomLocationInTelAviv();
      setLocation(randomLocation);
      locationGenerated.current = true;
    }
  }, [isMapShow]);

  const backToHome = () => {
    setShowLoadButton(true);
    setSelectedName("");
  };

  const pokemon = {
    id: selectedPokemon.id,
    name: selectedPokemon.name,
    sprites: selectedPokemon.sprites,
  };
  const pokemonOnMap = {
    name: pokemon.name,
    iconUrl: pokemon.sprites.front_default,
    location: location,
  };

  const generateRandomLocationInTelAviv = (): Coordinates => {
    const bounds = {
      north: 32.1357,
      south: 32.0236,
      east: 34.8249,
      west: 34.7465,
    };

    const lat = Math.random() * (bounds.north - bounds.south) + bounds.south;
    const lng = Math.random() * (bounds.east - bounds.west) + bounds.west;

    return { lat, lng };
  };

  return (
    <CardDetailsWrapper>
      <BackHomeButton onClick={backToHome}> ← Home page </BackHomeButton>

      <PokemonCard
        name={selectedPokemon.name}
        imgUrl={selectedPokemon.sprites.front_default}
        index={selectedPokemon.id}
        isPokemonDetails={true}
        setSelectedName={setSelectedName}
        selectedPokemon={selectedPokemon}
        pokemon={pokemon}
      />
      <ShowDirectionsButton onClick={() => setIsMapShow((prev) => !prev)}>
        {(!isMapShow ? "Show" : "Hide") + " Directions"}
      </ShowDirectionsButton>
      {isMapShow && locationGenerated && <MapView pokemon={pokemonOnMap} />}
    </CardDetailsWrapper>
  );
}
