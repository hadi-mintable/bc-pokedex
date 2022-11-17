import { Types } from "@components/PokemonType/definitions";

export type PokemonListing = {
  id: number;
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
