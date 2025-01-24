import { NUMBER_OF_POKEMON, POKEMON_API_URL } from "@/lib/constants";
import { IPokemon, PokemonSchema } from "@/schemas/pokemon";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function usePokemon(pokemonName = "") {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPokemonId = useCallback((pokemonName: string): string | number => {
    return pokemonName || Math.floor(Math.random() * NUMBER_OF_POKEMON) + 1;
  }, []);

  const fetchPokemon = useCallback(
    async (signal?: AbortSignal) => {
      setLoading(true);
      setError(null);
      setPokemon(null);

      try {
        const id = getPokemonId(pokemonName);
        const { data: rawData } = await axios.get(`${POKEMON_API_URL}/${id}`, {
          signal,
        });

        const data = PokemonSchema.parse(rawData);
        setPokemon(data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.name === "CanceledError") {
          return; // The request was cancelled
        }

        const errorMessage = axios.isAxiosError(err)
          ? err.response?.data?.message || err.message
          : "An error occurred";

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [pokemonName, getPokemonId]
  );

  const refetch = useCallback(() => {
    void fetchPokemon();
  }, [fetchPokemon]);

  useEffect(() => {
    const abortController = new AbortController();
    void fetchPokemon(abortController.signal);

    return () => {
      abortController.abort();
    };
  }, [pokemonName, fetchPokemon]);

  return { pokemon, loading, error, refetch };
}
