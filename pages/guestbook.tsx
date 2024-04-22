import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Button,
  Textarea,
  useToast,
  VStack,
  HStack,
  Avatar,
  Text,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Guestbook() {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const toast = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  console.log("messages", messages);

  async function fetchMessages() {
    const res = await fetch("/api/messages");
    const data = await res.json();
    if (res.ok) {
      setMessages(data);
    } else {
      toast({
        title: "Error fetching messages.",
        description: data.error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  async function handleSend() {
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: message,
        user_email: session.user.email,
      }),
    });
    if (res.ok) {
      setMessage("");
      fetchMessages();
    } else {
      const error = await res.json();
      toast({
        title: "Error sending message.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <VStack spacing={4} p={5}>
        <Heading as="h1" fontSize="2xl" fontWeight="medium">
          leave me a message{" "}
        </Heading>
        <Box
          height="5px"
          w="100px"
          m="10px 0"
          bottom="-1px"
          display="block"
          backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"
        ></Box>
        {session ? (
          <>
            <Textarea
              placeholder="Leave a message in the guestbook..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Box
              w="100%"
              textAlign="right"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={4}
              mt={4}
              borderWidth={1}
            >
              <Box display="flex" alignItems="center" gap={4}>
                <Avatar src={session.user.image} size="sm" />
                <Text fontSize="sm">Signed in as {session.user.name}</Text>
              </Box>
              <Box
                gap={4}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button
                  bg={useColorModeValue("blue.50", "blue.900")}
                  onClick={handleSend}
                  disabled={!message}
                  fontSize="sm"
                  fontWeight="sm"
                >
                  send
                </Button>
                <Button
                  bg={useColorModeValue("red.50", "red.100")}
                  color={useColorModeValue("red.500", "red.900")}
                  onClick={() => signOut()}
                  fontSize="sm"
                  fontWeight="sm"
                >
                  sign out
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <Button
            onClick={() => signIn("github")}
            leftIcon={<FaGithub />}
            bg="black"
            color="white"
            _hover={{ bg: "blue.700", boxShadow: "lg" }}
            fontSize={["sm", "sm"]}
            fontWeight="md"
          >
            Sign in with GitHub
          </Button>
        )}

        <Box
          w="100%"
          borderWidth={1}
          borderRadius="md"
          p={4}
          mt={4}
          display="flex"
          flexDir="column"
          gap={4}
        >
          <Heading
            as="h2"
            fontSize="xl"
            fontWeight="medium"
            alignSelf={"center"}
          >
            messages{" "}
          </Heading>
          {messages.map((msg: any, i: number) => (
            <HStack key={i} align="stretch">
              <Avatar src={msg.profiles.image_url} size="sm" />
              <Text fontWeight="bold">{msg.profiles.username}:</Text>
              <Text>{msg.content}</Text>
            </HStack>
          ))}
        </Box>
      </VStack>
    </motion.div>
  );
}
