import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  console.log(game);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text dangerouslySetInnerHTML={{ __html: game.description }}></Text>
    </>
  );
};

export default GameDetail;
