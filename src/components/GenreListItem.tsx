import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
}

const GenreListItem = ({ genre, onSelectGenre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="link">
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreListItem;
