import { Stack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <Stack>
      {genres.map((genre) => (
        <GenreListItem genre={genre} />
      ))}
    </Stack>
  );
};

export default GenreList;
