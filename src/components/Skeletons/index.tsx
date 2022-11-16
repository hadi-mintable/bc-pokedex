import LoadingPokeCard from "./LoadingPokeCard";

export const LoadingPokeCards = ({ count }: { count: number }) => {
  const total = [];

  for (let i = 0; i < count; i++) {
    total.push(
      <li key={i}>
        <LoadingPokeCard key={i} />
      </li>
    );
  }

  return <>{total}</>;
};
