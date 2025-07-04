import { useEffect, useState } from "react";
import { getPokemonByName, getPokemonDescription } from "../services/api";
import type { FullPokemonData } from "../types/pokemon";

export const useFetchPokemonDetails = (name: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [pokemon, setPokemon] = useState<FullPokemonData | null>(null);

  useEffect(() => {
    if (name.trim() === "") return;

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const [details, description] = await Promise.all([
          getPokemonByName(name),
          getPokemonDescription(name),
        ]);

        setPokemon({ ...details, description });
      } catch (error) {
        setError("Fetch failed");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { isLoading, error, pokemon };
};
