import { PokemonSchema } from "@/schemas/pokemon";
import { z } from "zod";

export interface TransformedPokemon {
  id: number;
  name: string;
  types: string[];
  image: string;
  moves: string[];
  height: number;
  weight: number;
  abilities: string[];
  stats: Array<{ name: string; value: number }>;
}

export type IPokemon = z.infer<typeof PokemonSchema>;
