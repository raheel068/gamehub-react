import { List, ListItem, Stack } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <GenreListItem genre={genre} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
