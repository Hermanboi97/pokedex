import { CheckCircle2 } from "lucide-react";

interface PokemonDetailsProps {
  height: number;
  weight: number;
  abilities: string[];
}

function PokemonDetails({ height, weight, abilities }: PokemonDetailsProps) {
  return (
    <div className="px-8 py-4 bg-gray-50 relative">
      <div className="grid grid-cols-2 gap-4">
        {/* Details */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Details</h3>
          <div className="space-y-1">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 w-20">
                Height:
              </span>
              <span className="text-base font-semibold text-gray-900">
                {height / 10} m
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500 w-20">
                Weight:
              </span>
              <span className="text-base font-semibold text-gray-900">
                {weight / 10} kg
              </span>
            </div>
          </div>
        </div>

        {/* Abilities */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Abilities</h3>
          <ul className="space-y-1">
            {abilities.map((ability) => (
              <li key={ability} className="flex items-center">
                <CheckCircle2 className="size-4 text-indigo-500 mr-2" />
                <span className="text-base font-medium text-gray-900 capitalize">
                  {ability}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
