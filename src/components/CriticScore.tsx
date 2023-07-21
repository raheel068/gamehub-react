import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" borderRadius="4px" colorScheme={color} paddingX={3}>
      {score}
    </Badge>
  );
};

export default CriticScore;
