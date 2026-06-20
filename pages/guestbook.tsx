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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "../lib/i18n";

export default function Guestbook() {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const toast = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const res = await fetch("/api/messages");
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      const data = await res.json();
      setMessages(data);
    } catch (err: any) {
      toast({
        title: t("guestbook.errorFetch"),
        description: err.message,
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
      body: JSON.stringify({ content: message }),
    });
    if (res.ok) {
      setMessage("");
      fetchMessages();
    } else {
      const data = await res.json();
      toast({
        title: t("guestbook.errorSend"),
        description: data.error,
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
          {t("guestbook.title")}{" "}
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
              placeholder={t("guestbook.placeholder")}
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
                <Text fontSize="sm">
                  {t("guestbook.signedInAs")} {session.user.name}
                </Text>
              </Box>
              <Box
                gap={4}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button
                  bg="var(--accent)"
                  color="var(--bg)"
                  _hover={{ bg: "var(--accent-strong)" }}
                  onClick={handleSend}
                  disabled={!message}
                  fontSize="sm"
                  fontWeight="sm"
                >
                  {t("guestbook.send")}
                </Button>
                <Button
                  bg="var(--surface-2)"
                  color="var(--text-muted)"
                  onClick={() => signOut()}
                  fontSize="sm"
                  fontWeight="sm"
                >
                  {t("guestbook.signOut")}
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <Button
            onClick={() => signIn("github")}
            leftIcon={<FaGithub />}
            bg="var(--accent)"
            color="var(--bg)"
            _hover={{ bg: "var(--accent-strong)", boxShadow: "lg" }}
            fontSize={["sm", "sm"]}
            fontWeight="md"
          >
            {t("guestbook.signIn")}
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
            {t("guestbook.messages")}{" "}
          </Heading>
          {messages.map((msg: any, i: number) => (
            <HStack key={i} align="stretch">
              <Avatar src={msg.profiles?.image_url} size="sm" />
              <Text fontWeight="bold">
                {msg.profiles?.username ?? msg.user_email}:
              </Text>
              <Text>{msg.content}</Text>
            </HStack>
          ))}
        </Box>
      </VStack>
    </motion.div>
  );
}
