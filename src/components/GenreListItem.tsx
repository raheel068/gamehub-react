import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

interface Props {
  genre: Genre;
  selectedGenreId?: number;
  onSelectGenre: (genre: Genre) => void;
}

const GenreListItem = ({ genre, onSelectGenre, selectedGenreId }: Props) => {
  return (
    <HStack>
      <Image
        objectFit="cover"
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button
        whiteSpace="normal"
        textAlign="left"
        onClick={() => onSelectGenre(genre)}
        fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
        fontSize="lg"
        variant="link"
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreListItem;
