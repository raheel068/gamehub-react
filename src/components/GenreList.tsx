import { Stack } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");

  return (
    <Stack>
      {data.map((genre) => (
        <GenreListItem genre={genre} />
      ))}
    </Stack>
  );
};

export default GenreList;
