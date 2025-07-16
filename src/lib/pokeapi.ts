import type {
  PokemonData,
  PokeAPIListResponse,
  PokeAPIDetail,
  TypeEffectiveness,
} from "../types/pokemon";

// Helper function to fetch damage relations for a single type
async function fetchTypeEffectiveness(
  typeName: string
): Promise<TypeEffectiveness> {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
  const data = await res.json();

  return {
    double_damage_from: data.damage_relations.double_damage_from.map(
      (t: any) => t.name
    ),
    half_damage_from: data.damage_relations.half_damage_from.map(
      (t: any) => t.name
    ),
    no_damage_from: data.damage_relations.no_damage_from.map(
      (t: any) => t.name
    ),
  };
}

// Merge multiple type effectiveness into a single object
function mergeEffectiveness(types: TypeEffectiveness[]): TypeEffectiveness {
  const merged: TypeEffectiveness = {
    double_damage_from: [],
    half_damage_from: [],
    no_damage_from: [],
  };

  for (const type of types) {
    merged.double_damage_from.push(...type.double_damage_from);
    merged.half_damage_from.push(...type.half_damage_from);
    merged.no_damage_from.push(...type.no_damage_from);
  }

  // Remove duplicates
  merged.double_damage_from = [...new Set(merged.double_damage_from)];
  merged.half_damage_from = [...new Set(merged.half_damage_from)];
  merged.no_damage_from = [...new Set(merged.no_damage_from)];

  return merged;
}

export async function fetchAllPokemon(limit = 20): Promise<PokemonData[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data: PokeAPIListResponse = await res.json();

  const detailed = await Promise.all(
    data.results.map(async (p) => {
      const detailsRes = await fetch(p.url);
      const details: PokeAPIDetail = await detailsRes.json();

      const types = details.types.map((t) => t.type.name);

      const effectivenessPerType = await Promise.all(
        types.map((typeName) => fetchTypeEffectiveness(typeName))
      );

      const effectiveness = mergeEffectiveness(effectivenessPerType);

      return {
        id: details.id,
        name: details.name,
        sprite: details.sprites.other["official-artwork"].front_default,
        stats: details.stats.map((s) => ({
          name: s.stat.name,
          base: s.base_stat,
        })),
        types,
        effectiveness, // ✅ include in final object
      };
    })
  );

  return detailed;
}
