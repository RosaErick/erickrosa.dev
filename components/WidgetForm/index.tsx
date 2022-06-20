import React, { useState } from "react";
import bugImg from "../../public/images/bug.svg";
import lampImg from "../../public/images/lamp.svg";
import cloudImg from "../../public/images/cloud.svg";

import { FeedbackSuccess } from "./Steps/FeedbackSuccess";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { PopoverContent, useColorModeValue } from "@chakra-ui/react";

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    image: {
      source: bugImg,
      alt: "Insect Image",
    },
  },
  IDEA: {
    title: "Menssage",
    image: {
      source: lampImg,
      alt: "Lamp Image",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      source: cloudImg,
      alt: "Cloud image",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedBackSent] = useState(false);
  const textColor = useColorModeValue("#ffff", "gray.700");


  function handleRestartFeedBack() {
    setFeedbackType(null);
    setFeedBackSent(false);
  }

  return (
    <PopoverContent
    backgroundColor={textColor}

    >
      {feedbackSent ? (
        <FeedbackSuccess onFeedbackRestart={handleRestartFeedBack} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <>
              <FeedBackContentStep
                onFeedbackRestart={handleRestartFeedBack}
                onFeedbackSent={() => setFeedBackSent(true)}
                feedbackType={feedbackType}
              />
            </>
          )}
        </>
      )}
    </PopoverContent>
  );
}
