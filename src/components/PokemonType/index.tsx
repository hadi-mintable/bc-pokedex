import { PokemonTypeProps } from "./definitions";
import { Type } from "./style";

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  return <Type type={type}>{type}</Type>;
};

export default PokemonType;
