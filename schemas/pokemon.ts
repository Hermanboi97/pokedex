import { z } from "zod";

export const PokemonSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    types: z.array(z.object({ type: z.object({ name: z.string() }) })),
    sprites: z
      .object({
        front_default: z.string(),
        other: z.object({
          "official-artwork": z.object({
            front_default: z.string(),
          }),
        }),
      })
      .passthrough(),
    moves: z.array(z.object({ move: z.object({ name: z.string() }) })),
    height: z.number(),
    weight: z.number(),
    abilities: z.array(z.object({ ability: z.object({ name: z.string() }) })),
    stats: z.array(
      z.object({
        base_stat: z.number(),
        stat: z.object({ name: z.string() }),
      })
    ),
  })
  .passthrough();

export type IPokemon = z.infer<typeof PokemonSchema>;
