import { IPokemon } from "@/schemas/pokemon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Transform the raw pokemon data into a format that is easier to use in the component
 * @param pokemonData - The raw pokemon data
 * @returns The transformed pokemon data
 */
export const transformPokemonData = (pokemonData: IPokemon | null) => {
  if (!pokemonData) return null;

  return {
    id: pokemonData.id,
    name: pokemonData.name,
    types: pokemonData.types.map((t: IPokemon["types"][number]) => t.type.name),
    image:
      pokemonData.sprites.other["official-artwork"].front_default ||
      pokemonData.sprites.front_default,
    moves: pokemonData.moves.map((m: IPokemon["moves"][number]) => m.move.name),
    height: pokemonData.height,
    weight: pokemonData.weight,
    abilities: pokemonData.abilities.map(
      (a: IPokemon["abilities"][number]) => a.ability.name
    ),
    stats: pokemonData.stats.map((s: IPokemon["stats"][number]) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
  };
};
