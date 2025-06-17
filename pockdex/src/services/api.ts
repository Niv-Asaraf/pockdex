import type { PokemonDescription } from "../types/pokemon";

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonsList = async (limit: number, offset: number) => {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to fetch pokemon list');
  const finalData = await res.json();
  return finalData.results;
};

export const getPokemonByName = async (name: string) => {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error(`Pokemon: ${name} not found`);
  return await res.json();
};

export const getPokemonDescription = async (name: string): Promise<string> => {
  const res = await fetch(`${BASE_URL}/pokemon-species/${name}/`);
  if (!res.ok) throw new Error("Failed to fetch species data");

  const pokemonDetails: PokemonDescription = await res.json();

  const entry = pokemonDetails.flavor_text_entries.find(
    (p) => p.language.name === "en"
  );

  return entry?.flavor_text ?? "No description available";
};