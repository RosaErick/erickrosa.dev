import React from 'react'
import  bugImg  from '../../public/images/bug.svg'
import  lampImg  from '../../public/images/lamp.svg'
import  cloudImg  from '../../public/images/cloud.svg'


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
  return (
    <div>index</div>
  )
}
