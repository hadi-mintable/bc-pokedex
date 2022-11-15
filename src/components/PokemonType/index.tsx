import { PokemonTypeProps } from "./definitions";
import { Type } from "./style";

const PokemonType: React.FC<PokemonTypeProps> = ({ type, size = "sm" }) => {
  return (
    <Type size={size} type={type}>
      {type}
    </Type>
  );
};

export default PokemonType;
