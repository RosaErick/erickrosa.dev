import {
  Button,
  Image,
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
          <h3>Leave your feedback</h3>
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
                <Image boxSize='20px' src={value.image.source} alt={value.image.alt} />

                {value.title}
              </Button>
            );
          })}
        </PopoverBody>
      </PopoverContent>
    </>
  );
}
