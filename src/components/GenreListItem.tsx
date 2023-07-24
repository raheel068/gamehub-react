import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

interface Props {
  genre: Genre;
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreListItem = ({ genre, onSelectGenre, selectedGenre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button
        onClick={() => onSelectGenre(genre)}
        fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
        fontSize="lg"
        variant="link"
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreListItem;
