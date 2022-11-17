import { useEffect, useState } from "react";
import PokeCard from "@components/PokeCard";
import { LoadingPokeCards } from "@components/Skeletons";
import { List, Wrapper } from "@pages/Home/style";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import Error from "@pages/Home/Error";

const PokeFriends = () => {
  const itemsPerPage = 12;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokeFriendsData, setPokeFriendsData] = useState<any>([]);

  // reading pokefriends data
  useEffect(() => {
    setIsLoading(true);

    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setIsLoading(false);

      if (!data) {
        setPokeFriendsData([]);
        return;
      }

      setPokeFriendsData(Object.entries(data));
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
          {pokeFriendsData.length ? (
            <List>
              {pokeFriendsData
                ?.sort((a, b) => b[1].date_added - a[1].date_added)
                ?.map((pokemon, i: number) => (
                  <li key={i}>
                    <PokeCard pokemon={pokemon[1]?.pokemon} isPokeFriend />
                  </li>
                ))}
            </List>
          ) : (
            <Error />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default PokeFriends;
