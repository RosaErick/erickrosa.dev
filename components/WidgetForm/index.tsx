import React, { useState } from "react";
import bugImg from "../../public/images/bug.svg";
import lampImg from "../../public/images/lamp.svg";
import cloudImg from "../../public/images/cloud.svg";

import { FeedbackSuccess } from "./Steps/FeedbackSuccess";
import { FeedBackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImg,
      alt: "Imagem de um Inseto",
    },
  },
  IDEA: {
    title: "Mensagem",
    image: {
      source: lampImg,
      alt: "Imagem de um Lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: cloudImg,
      alt: "Imagem de uma nuvem",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedBackSent] = useState(false);

  function handleRestartFeedBack() {
    setFeedbackType(null);
    setFeedBackSent(false);
  }

  return (
    <>
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
    </>
  );
}
