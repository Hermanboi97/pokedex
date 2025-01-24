import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo, useState } from "react";

interface PokemonHeaderProps {
  id: number;
  name: string;
  types: string[];
  image: string;
}

export const PokemonHeader = memo<PokemonHeaderProps>(
  ({ id, name, types, image }) => {
    const [imageIsLoaded, setImageIsLoaded] = useState(false);

    // It is necessary to have this defined inside the component for tailwind to regocnize the colors
    const TYPE_COLORS = {
      normal: "bg-gray-400",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-500",
      ice: "bg-blue-300",
      fighting: "bg-red-600",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-400",
      psychic: "bg-pink-500",
      bug: "bg-green-400",
      rock: "bg-yellow-700",
      ghost: "bg-purple-600",
      dragon: "bg-indigo-600",
      dark: "bg-gray-700",
      steel: "bg-gray-400",
      fairy: "bg-pink-300",
    } as const;

    return (
      <div className="md:flex">
        <div className="md:flex-shrink-0 relative">
          {/* Pokemon Image */}
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={192}
            height={192}
            priority
            onLoadStart={() => setImageIsLoaded(false)}
            onLoadingComplete={() => setImageIsLoaded(true)}
            className={cn(
              "opacity-0 transition-all duration-300 h-48 w-full object-cover md:w-48 scale-80 relative",
              imageIsLoaded
                ? "opacity-100 md:scale-125 scale-100"
                : "scale-50 opacity-0"
            )}
          />
        </div>

        {/* Pokemon Details */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            #{id.toString().padStart(3, "0")}
          </div>
          <h2 className="mt-1 text-3xl font-bold text-gray-900 capitalize">
            {name}
          </h2>
          <div className="mt-2 flex flex-wrap">
            {types.map((type: string) => (
              <span
                key={type}
                className={cn(
                  "px-3 py-1 rounded-full text-white text-sm mr-2 mb-2 capitalize",
                  TYPE_COLORS[type as keyof typeof TYPE_COLORS] || "bg-gray-500"
                )}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

PokemonHeader.displayName = "PokemonHeader";
