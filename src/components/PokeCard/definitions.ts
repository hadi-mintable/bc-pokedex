import { Types } from "../PokemonType/definitions";

export interface PokeCardProps {
  pokemon: {
    name: string;
    pokemon_species_id: number;
    pokemon_sprites: [
      {
        sprites: string;
      }
    ];
    pokemon_type: [
      {
        pokemon_v2_type: {
          name: Types;
        };
      }
    ];
  };
}
