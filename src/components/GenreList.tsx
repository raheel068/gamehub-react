import { List, ListItem, Spinner, Stack } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import useData from "../hooks/useData";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useData<Genre>("/genres");

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <GenreListItem
            genre={genre}
            onSelectGenre={(genre) => onSelectGenre(genre)}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
