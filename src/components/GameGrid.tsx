import { Grid, GridItem, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
const GameGrid = () => {
  const { games, err } = useGame();
  return (
    <>
      {err && <Text>{err}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
