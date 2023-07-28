import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import useGameQueryStore from "../store";
import getCroppedImageUrl from "./../services/image-url";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
        onClick={() => setSelectedGenreId(genre.id)}
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
