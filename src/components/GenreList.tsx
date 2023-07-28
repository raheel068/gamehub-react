import { Heading, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <GenreListItem genre={genre} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
