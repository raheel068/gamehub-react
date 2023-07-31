import { Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <Heading>Opps sorry</Heading>
      <Text>Invalid page</Text>
    </>
  );
};

export default ErrorPage;
