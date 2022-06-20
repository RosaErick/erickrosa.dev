import { FeedbackType, feedbackTypes } from "..";
import { FormEvent, useState } from "react";
import {
  Button,
  Image,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";

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
        <Button
          onClick={onFeedbackRestart}
          variant="outline"
          size="sm"
            mr={2}
                  
          backgroundColor={backgroundColor[colorMode]}
          _hover={{ background: "none" }}
          color={iconColor[colorMode]}
              >
                  
                 	&#8592;
            </Button>

        <Image
          boxSize="20px"
          src={feedbackTypeInfo.image.source}
          alt={feedbackTypeInfo.image.alt}
        />

        <PopoverCloseButton />
      </PopoverHeader>

      <PopoverBody>
        <form onSubmit={handleSubmitFeedback}>
          <Textarea
            onChange={(event) => setComment(event.target.value)}
            placeholder="Leave your feedback"
          />
          <Button type="submit" variant="outline" size="sm">
            Send
          </Button>
        </form>
      </PopoverBody>
    </>
  );
}
