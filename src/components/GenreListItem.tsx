import { HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  return (
    <HStack marginY={1}>
      <Image
        width="40px"
        height="40px"
        borderRadius={5}
        src={genre.image_background}
      />
      <Text>{genre.name}</Text>
    </HStack>
  );
};

export default GenreListItem;
