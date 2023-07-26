import { Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <GenreListItem
              genre={genre}
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => onSelectGenre(genre)}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
