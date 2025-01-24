import { Heart, Wind, Zap } from "lucide-react";

import { ShieldPlus, Swords } from "lucide-react";

import { Shield } from "lucide-react";

export const POKEMON_STATS = {
  MAX_POKEMON_STATS_SCORE: 255,
} as const;

export const STATS_NAME_MAP = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
} as const;

export const STATS_ICON_MAP = {
  hp: Heart,
  attack: Swords,
  defense: Shield,
  "special-attack": Zap,
  "special-defense": ShieldPlus,
  speed: Wind,
};

export const NUMBER_OF_POKEMON = 898;

export const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
