import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { games, err } = useGame();
  // const skulls = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
      >
        {isLoading && skulls.map((skull) => <GameCardSkeleton key={skull} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
