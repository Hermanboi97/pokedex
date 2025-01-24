import { POKEMON_STATS, STATS_ICON_MAP, STATS_NAME_MAP } from "@/lib/constants";
import { createElement } from "react";
import { StatBar } from "../StatsBar";

interface PokemonStatsProps {
  stats: { name: string; value: number }[];
}

function PokemonStats({ stats }: PokemonStatsProps) {
  return (
    <div className="px-8 pt-4 pb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.name}>
            <div className="flex items-center mb-1">
              {createElement(
                STATS_ICON_MAP[stat.name as keyof typeof STATS_ICON_MAP],
                { className: "size-5 mr-2 text-blue-500" }
              )}
              <div className="text-sm text-gray-600 flex justify-between items-center w-full">
                <div>
                  {STATS_NAME_MAP[stat.name as keyof typeof STATS_NAME_MAP]}
                </div>
                <div className="text-gray-900 font-medium">{stat.value}</div>
              </div>
            </div>

            <StatBar
              value={stat.value}
              maxValue={POKEMON_STATS.MAX_POKEMON_STATS_SCORE}
              color="bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonStats;
