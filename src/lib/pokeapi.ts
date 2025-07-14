import type {
  PokemonData,
  PokeAPIListResponse,
  PokeAPIDetail,
} from "../types/pokemon";

export async function fetchAllPokemon(limit = 20): Promise<PokemonData[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data: PokeAPIListResponse = await res.json();

  const detailed = await Promise.all(
    data.results.map(async (p) => {
      const detailsRes = await fetch(p.url);
      const details: PokeAPIDetail = await detailsRes.json();

      return {
        id: details.id,
        name: details.name,
        sprite: details.sprites.other["official-artwork"].front_default,
        stats: details.stats.map((s) => ({
          name: s.stat.name,
          base: s.base_stat,
        })),
        types: details.types.map((t) => t.type.name),
      };
    })
  );

  return detailed;
}
