import { useState } from "react";
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
import FeaturedProjectCard from "./FeaturedProjectCard";
import { useTranslation } from "../../lib/i18n";

const ProjectListFull = () => {
  const [searchValue, setSearchValue] = useState("");
  const { t } = useTranslation();
  const { data, error } = useSWR("/api/github", fetcher);
  if (error)
    return <div style={{ width: "100%" }}>{t("projects.failedToLoad")}</div>;
  if (!data)
    return (
      <div style={{ width: "100%" }}>
        <InputGroup mb={5} mr={4} w="100%">
          <Input
            aria-label={t("projects.searchPlaceholder")}
            placeholder={t("projects.searchPlaceholder")}
          />
          <InputRightElement children={<SearchIcon color="var(--text-subtle)" />} />
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
          aria-label={t("projects.searchPlaceholder")}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={t("projects.searchPlaceholder")}
        />
        <InputRightElement children={<SearchIcon color="var(--text-subtle)" />} />
      </InputGroup>
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {!filteredProjects.length && (
          <Text>
            {t("projects.noResults")} <strong>{searchValue}</strong>!
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
            },
            index: number
          ) => (
            <FeaturedProjectCard
              key={p.name ?? index}
              index={index + 1}
              title={p.name}
              description={p.description}
              language={p.language}
              repoHref={p.url}
              liveHref={p.homepage || undefined}
            />
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default ProjectListFull;
