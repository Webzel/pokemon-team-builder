export interface Stat {
  name: string;
  base: number;
}

export interface TypeEffectiveness {
  double_damage_from: string[];
  half_damage_from: string[];
  no_damage_from: string[];
}

export interface PokemonData {
  id: number;
  name: string;
  sprite: string;
  stats: Stat[];
  types: string[];
  effectiveness: TypeEffectiveness;
}

// Raw types from the PokéAPI response structure
export interface PokeAPIListResponse {
  results: { name: string; url: string }[];
}

export interface PokeAPIStat {
  base_stat: number;
  stat: { name: string };
}

export interface PokeAPIDetail {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: PokeAPIStat[];
  types: { type: { name: string } }[];
}
