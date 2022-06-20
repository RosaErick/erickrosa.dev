import { FeedbackType, feedbackTypes } from "..";
import { FormEvent, useState } from "react";
import {
  Button,
  Flex,
  Image,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ChatIcon } from "@chakra-ui/icons";

interface FeedBackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}

export function FeedBackContentStep({
  feedbackType,
  onFeedbackRestart,
  onFeedbackSent,
}: FeedBackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [comment, setComment] = useState<string | null>(null);
  const { colorMode } = useColorMode();

  const iconColor = {
    light: "black",
    dark: "white",
  };

  const backgroundColor = {
    light: "gray.100",
    dark: "gray.800",
  };

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log("submit feedback");
    console.log(comment);
    onFeedbackSent();
  }

  return (
    <>
      <PopoverHeader>
        <Flex alignItems="center">
          <Button
            onClick={onFeedbackRestart}
            variant="outline"
            size="sm"
            backgroundColor={backgroundColor[colorMode]}
            _hover={{ background: "none" }}
            color={iconColor[colorMode]}
            aria-label="Open Widget"
          >
            <ArrowLeftIcon w={1} h={1} />
          </Button>

          <Image
            boxSize="20px"
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            flex="1"
            justifySelf="center"
          />
          <PopoverCloseButton position="absolute" top="2" />
        </Flex>
      </PopoverHeader>

      <PopoverBody>
        <form onSubmit={handleSubmitFeedback}>
          <Textarea
            onChange={(event) => setComment(event.target.value)}
            placeholder="Leave your feedback"
            mb={4}
            mt={2}
          />
          <Button type="submit" variant="outline" size="sm">
            Send
          </Button>
        </form>
      </PopoverBody>
    </>
  );
}
