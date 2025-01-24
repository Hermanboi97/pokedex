"use client";

import { Button } from "@/components/Button";
import { Loader } from "@/components/Loader";
import { transformPokemonData } from "@/lib/utils";
import { TransformedPokemon } from "@/types/pokemon";
import { AnimatePresence } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { Pokemon } from "../components/pokemon-card/Pokemon";
import { Search } from "../components/Search";
import { usePokemon } from "../hooks/usePokemon";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { pokemon, loading, error, refetch } = usePokemon(searchTerm);

  const handleSearch = (pokemonName: string) => {
    setSearchTerm(pokemonName);
  };

  const transformedPokemon: TransformedPokemon | null = useMemo(
    () => transformPokemonData(pokemon),
    [pokemon]
  );

  return (
    <div className="h-full min-h-screen w-screen relative bg-gray-100 py-6 flex flex-col items-center sm:py-12">
      <div className="relative py-3 w-full max-w-[440px] mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Pokédex
        </h1>
        <div className="flex justify-between items-center mb-8 gap-2 w-full">
          <Button
            variant="outline"
            size="icon"
            onClick={refetch}
            disabled={loading}
            title="Random Pokemon"
          >
            <RefreshCcw />
          </Button>
          <Search onSearch={handleSearch} />
        </div>

        <div className="h-full w-full">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {loading && <Loader />}
          <AnimatePresence>
            {transformedPokemon && <Pokemon {...transformedPokemon} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
