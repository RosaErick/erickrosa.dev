import ToolCard from "./toolCard";
import { Heading, Grid } from "@chakra-ui/react";
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiStyledcomponents,SiNextdotjs, SiGnubash, SiChakraui } from "react-icons/si";
import Paragraph from "./Paragraph";

const tools = [
  {
    name: "Javascript",
    description: "A powerful tool and my favourite programming language. These days you can't build a great product without JS.",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.info",
  },
  {
    name: "Node.js",
    description: "JavaScript engine for server-side javascript.",
    icon: <FaNodeJs fontSize="20px" />,
    url: "https://www.nodejs.org",
  },
  {
    name: "React.js",
    description: "An open-source JavaScript library for building user interfaces.",
    icon: <FaReact fontSize="20px" />,
    url: "https://www.reactjs.org",
  },
  {
    name: "Next.js",
    description: " A react framework. Next.js gives you the best developer experience with all the features you need for production.",
    icon: <SiNextdotjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "GIT & GitHub",
    description:
      "A version control system that gives you a lot of flexibility.",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://medium.com/swlh/things-about-git-and-github-you-need-to-know-as-developer-907baa0bed79",
  },
  {
    name: "Styled-components",
    description:
      "Styled-components is a CSS in JS library built for React. It helps keep the concerns of styling and element architecture",
    icon: <SiStyledcomponents fontSize="20px" />,
    url: "https://styled-components.com/",
    },  {
    name: "Chakra-UI",
    description:
      "Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.",
    icon: <SiChakraui fontSize="20px" />,
    url: "https://chakra-ui.com/",
    },
  
];

const Stack = () => {
  return (
 <>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        My Skills
      </Heading>
      <Paragraph fontSize="xl" lineHeight={1.6}>
        As a web developer there are alot of tools you use in your daily bases,
        these are primary tools that i use & like.
      </Paragraph>
      <Grid
        mt={10}
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={4}
      >
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool?.name} />
        ))}
      </Grid>
      </>

  );
};

export default Stack;
