import { Flex, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Flex flexDirection="column" alignItems="center" height="100vh">
        <Heading as="h1" marginBottom={5}>
          Error
        </Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't not exist."
            : "An unexpected error occurred."}
        </Text>
      </Flex>
    </>
  );
};

export default ErrorPage;
