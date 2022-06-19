import {
  Button,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
} from "@chakra-ui/react";
import React from "react";
import { FeedbackType, feedbackTypes } from "..";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  return (
    <>
      <PopoverContent>
        <PopoverHeader>
          <h3>Deixei seu Feedback</h3>
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <Button
                onClick={() => props.onFeedbackTypeChange(key as FeedbackType)}
                key={key}
                variant="outline"
                size="sm"
                mr={2}
              >
                <img src={value.image.source} alt={value.image.alt} />

                {value.title}
              </Button>
            );
          })}
        </PopoverBody>
      </PopoverContent>
    </>
  );
}
