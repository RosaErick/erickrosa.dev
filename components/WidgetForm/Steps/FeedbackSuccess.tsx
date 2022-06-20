import {
  Button,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
} from "@chakra-ui/react";
import React from "react";
import successImage from "../../../public/images/success.svg";

interface FeedbackSuccessProps {
  onFeedbackRestart: () => void;
}

export function FeedbackSuccess({ onFeedbackRestart }: FeedbackSuccessProps) {
  return (
    <>
      <PopoverContent>
        <PopoverHeader>
          <img src={successImage} alt="Sucesso" />
          <PopoverCloseButton />
        </PopoverHeader>
        <PopoverBody>
          <p>Thanks for your feedback!</p>
          <Button onClick={onFeedbackRestart} variant="outline" size="sm">
           Send another Feedback
          </Button>
        </PopoverBody>
      </PopoverContent>
    </>
  );
}
