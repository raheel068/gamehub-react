import { List, ListItem, Spinner } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import useData from "../hooks/useData";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useData<Genre>("/genres");

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <GenreListItem
            genre={genre}
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => onSelectGenre(genre)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
