import { set, ref } from "firebase/database";
import { db } from "../../firebase";
import { uid } from "uid";

const useAddPokeFriend = () => {
  const uuid = uid();
  const id = `com-${uuid}`;

  const addPokeFriend = async ({ data, imageURL }) => {
    await set(ref(db, `/${id}`), {
      date_added: Date.now(),
      pokemon: {
        id,
        name: data?.name,
        pokemon_species_id: id,
        height: data?.height,
        weight: data?.weight,
        pokemon_sprites: [
          {
            sprites: JSON.stringify({
              front_default: imageURL,
            }),
          },
        ],
        pokemon_type: [
          {
            pokemon_v2_type: {
              name: data?.type,
            },
          },
        ],
      },
    });
  };

  return addPokeFriend;
};

export default useAddPokeFriend;
