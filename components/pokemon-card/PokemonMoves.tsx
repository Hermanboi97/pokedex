interface PokemonMovesProps {
  moves: string[];
}

function PokemonMoves({ moves }: PokemonMovesProps) {
  return (
    <div className="px-8 py-4 bg-gray-50 rounded-b-xl">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Moves</h3>
      <div className="flex flex-wrap">
        {moves.slice(0, 4).map((move) => (
          <span
            key={move}
            className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm mr-2 mb-2 capitalize"
          >
            {move}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonMoves;
