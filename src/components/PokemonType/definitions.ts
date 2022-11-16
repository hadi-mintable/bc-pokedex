export enum Types {
  fire = "fire",
  flying = "flying",
  grass = "grass",
  bug = "bug",
  water = "water",
  poison = "poison",
  normal = "normal",
  psychic = "psychic",
  electric = "electric",
  steel = "steel",
  rock = "rock",
  ground = "ground",
  ghost = "ghost",
  dragon = "dragon",
  ice = "ice",
  fairy = "fairy",
  dark = "dark",
}

export type Sizes = "sm" | "md";

export type PokemonTypeProps = {
  type: Types;
  size?: Sizes;
};
