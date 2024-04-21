import { Key, useState } from "react";
import useSWR from "swr";
import fetcher from "../../scripts/fetcher";
import {
  InputGroup,
  Input,
  InputRightElement,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ProjectCard from "./ProjectCard";

function getLanguageColor(language: any) {
  switch (language) {
    case "JavaScript":
      return "#f1e05a";
    case "Python":
      return "#3572A5";
    case "HTML":
      return "#e34c26";
    case "CSS":
      return "#480ca8";
    case "TypeScript":
      return "#2b7489";
    case "Vue":
      return "#2c3e";
    case "Ruby":
      return "#701516";
    case "bash":
      return "#89e051";

    default:
      return "#000000";
  }
}

const ProjectListFull = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, error } = useSWR("/api/github", fetcher);
  if (error)
    return (
      <div style={{ width: "100%" }}>
        Failed to load projects! Please check your internet connection. If the
        error persists, contact me.
      </div>
    );
  if (!data)
    return (
      <div style={{ width: "100%" }}>
        <InputGroup mb={5} mr={4} w="100%">
          <Input
            aria-label="Search by name, description, and language"
            placeholder="Search by name, description, and language"
          />
          <InputRightElement children={<SearchIcon color="gray.500" />} />
        </InputGroup>
        <SimpleGrid minChildWidth="300px" spacing="40px">
          {[...Array(10)].map((_, i) => (
            <Skeleton key={i} h="250px" />
          ))}
        </SimpleGrid>
      </div>
    );

  const filteredProjects = Object(data.repos)
    .filter(
      (project: { name: string; description: string; language: string }) =>
        project?.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        project?.language?.toLowerCase().includes(searchValue.toLowerCase())
    )

    //sort repos by created_at

    .sort((a: { created_at: string }, b: { created_at: string }) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

  return (
    <>
      <InputGroup mb={4} mr={4} w="100%">
        <Input
          aria-label="Search by name, description, and language"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by name, description, and language"
        />
        <InputRightElement children={<SearchIcon color="gray.500" />} />
      </InputGroup>
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {!filteredProjects.length && (
          <Text>
            No projects found for <strong>{searchValue}</strong>!
          </Text>
        )}
        {filteredProjects.map(
          (
            p: {
              homepage: string;
              name: string;
              description: string;
              url: string;
              language: string;
              stars: number;
              stargazers_url: string;
            },
            index: Key
          ) => (
            <ProjectCard
              demoHref={p.homepage}
              key={index}
              title={p.name}
              description={p.description}
              repoHref={p.url}
              languageColor={getLanguageColor(p.language)}
              language={p.language}
              starCount={p.stars}
              stargazersUrl={p.stargazers_url}
            />
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default ProjectListFull;
