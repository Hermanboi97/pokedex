import { useState } from "react";
import { Button } from "./Button";

interface SearchProps {
  onSearch: (pokemonName: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(search.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="flex-grow">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Pokemon"
          className="flex-grow px-4 py-2 rounded-lg border text-gray-800 border-gray-200 bg-white"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};
