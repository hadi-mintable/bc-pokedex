import PokeCard from "../../components/PokeCard";
import { LoadingPokeCards } from "../../components/Skeletons";
import { List, Wrapper } from "../Home/style";
import { useEffect, useState } from "react";
import { db } from "src/firebase";
import { ref, onValue } from "firebase/database";

const PokeFriends = () => {
  const itemsPerPage = 12;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokeFriendsData, setPokeFriendsData] = useState<any>({});

  // reading community pokemon data
  useEffect(() => {
    setIsLoading(true);

    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();

      if (data) {
        setIsLoading(false);
        setPokeFriendsData(data);
      }
    });
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <List>
          <LoadingPokeCards count={itemsPerPage} />
        </List>
      ) : (
        <>
          <List>
            {Object.entries(pokeFriendsData)?.map((pokemon: any, i: number) => (
              <li key={i}>
                <PokeCard pokemon={pokemon[1]?.pokemon} />
              </li>
            ))}
          </List>
        </>
      )}
    </Wrapper>
  );
};

export default PokeFriends;
