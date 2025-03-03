import { Alert, Box, Button, Spinner } from "@chakra-ui/react";
import { useAppContext } from "../context/appContext";
import AdminMessage from "./AdminMessage";
import Message from "./Message";

export default function Messages() {
  const { username, loadingInitial, error, getMessagesAndSubscribe, messages } =
    useAppContext();
  const reversed = [...messages].reverse();

  if (loadingInitial)
    return (
      <Box textAlign="center">
        <Spinner />
      </Box>
    );

  if (error)
    return (
      <Alert status="error" mt="20px">
        {error}
        <Button
          ml="5px"
          onClick={getMessagesAndSubscribe}
          colorScheme="red"
          variant="link"
        >
          try to reconnect
        </Button>
      </Alert>
    );

  if (!messages.length) {
    return (
      <Box as="h3" textAlign="center">
        No messages 😞
      </Box>
    );
  }

  return reversed.map((message) => {
    const isYou = message.username === username;
    const isAdmin = message.username === "SoccerBot";
    if (isAdmin) {
      return <AdminMessage key={message.id} message={message} />;
    }

    return <Message key={message.id} message={message} isYou={isYou} />;
  });
}
