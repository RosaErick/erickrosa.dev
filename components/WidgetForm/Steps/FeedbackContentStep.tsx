import { FeedbackType, feedbackTypes } from "..";
import { FormEvent, useState } from "react";
import { Button, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader } from "@chakra-ui/react";

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

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log("submit feedback");
    console.log(comment);
    onFeedbackSent();
  }

  return (
    <>
      <PopoverContent>
              <PopoverHeader>
                  <Button
                      onClick={onFeedbackRestart}
                      variant="outline"
                      size="sm"
                      mr={2}
                    
                  ></Button>

                  <img
                      src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                  />

                <PopoverCloseButton />

              </PopoverHeader>
              
              <PopoverBody>
                  <form onSubmit={handleSubmitFeedback}>
                      <textarea
                          onChange={(event) => setComment(event.target.value)}
                          placeholder="Deixe seu feedback"
                      
                      />
                      <Button type="submit" variant='outline' size="sm">
                          Enviar
                        </Button>
                  </form>
                </PopoverBody>
      </PopoverContent>
    </>
  );
}
