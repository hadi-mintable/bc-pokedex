export type Types =
  | "fire"
  | "flying"
  | "grass"
  | "bug"
  | "water"
  | "poison"
  | "normal"
  | "psychic"
  | "electric"
  | "steel"
  | "rock"
  | "ground";

export type Sizes = "sm" | "md";

export type PokemonTypeProps = {
  type: Types;
  size?: Sizes;
};
