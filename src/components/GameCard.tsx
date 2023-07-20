import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardBody>
        <Image src={game.background_image} />
        <Text>{game.name}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
