import { motion } from "framer-motion";
import PokemonDetails from "./PokemonDetails";
import { PokemonHeader } from "./PokemonHeader";
import PokemonMoves from "./PokemonMoves";
import PokemonStats from "./PokemonStats";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface PokemonProps {
  id: number;
  name: string;
  types: string[];
  image: string;
  moves: string[];
  height: number;
  weight: number;
  abilities: string[];
  stats: { name: string; value: number }[];
}

export const Pokemon = ({
  id,
  name,
  types,
  image,
  moves,
  height,
  weight,
  abilities,
  stats,
}: PokemonProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <PokemonHeader id={id} name={name} types={types} image={image} />
      <PokemonDetails height={height} weight={weight} abilities={abilities} />
      <PokemonStats stats={stats} />
      <PokemonMoves moves={moves} />
    </motion.div>
  );
};
